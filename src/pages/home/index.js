import {
  ButtonBuy,
  ButtonFinishBuy,
  Container,
  Content,
  FeedContainer,
  FullInformations,
  GameCard,
  GameFullImage,
  GameImage,
  GameValue,
  GameValueBox,
  Header,
  InfoGame,
  InfoPlatforms,
  Informations,
  Logo,
  MapLocation,
  ModalInfo,
  StoreMapLocation,
  Stores,
  Values,
} from "./styles";
import GoogleMapReact from "google-map-react";
import { api } from "../../services/api";
import { React, useEffect, useState } from "react";
import Alert from "../../components/Alert";
import QRCode from "react-qr-code";
import LogoSmart from "../../assets/logo.png";
import Modal from "../../components/modalGame";

function Home() {
  const [modal, setModal] = useState(false);

  const [games, setGames] = useState([]);

  const [oneGame, setOneGame] = useState([]);

  const [message, setMessage] = useState(undefined);

  const loadGames = async () => {
    const response = await api.get("/games");

    setGames(response.data);
  };

  useEffect(() => {
    loadGames();
  }, []);

  const handleOpenmodal = async (e) => {
    setModal(true);
    setOneGame(e);
  };

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      {modal && (
        <Modal handleClose={() => setModal(false)} title="Comprar Jogo">
          <InfoGame>
            <ModalInfo>
              <GameFullImage>
                <img src={oneGame.image} alt="Imagem Game"></img>
              </GameFullImage>
              <FullInformations>
                <h1>{oneGame.name}</h1>
                <p>{oneGame.description}</p>
                <GameValue>
                  {oneGame.__platforms__.map((platform) => (
                    <h3>{platform.name}</h3>
                  ))}
                  <QRCode value={`${oneGame.id_game}`} size={100}></QRCode>
                </GameValue>
                <GameValue>
                  <GameValueBox>
                    <p>R${oneGame.value.toFixed(2)}</p>
                  </GameValueBox>
                  <ButtonFinishBuy
                    onClick={() => alert("Compra Efetuada Com Sucesso")}
                  >
                    <p>COMPRAR</p>
                  </ButtonFinishBuy>
                </GameValue>
              </FullInformations>
            </ModalInfo>
            <h1>Lojas Disponiveis Para Compra:</h1>
            <Stores>
              {oneGame.__stores__.map((store) => (
                <StoreMapLocation>
                  <h3>{store.name}</h3>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: process.env.GOOGLE_MAPS_KEY,
                    }}
                    defaultCenter={{
                      lat: store.latitude,
                      lng: store.longitude,
                    }}
                    defaultZoom={16}
                  >
                    <MapLocation lat={store.latitude} lng={store.longitude} />
                  </GoogleMapReact>
                </StoreMapLocation>
              ))}
            </Stores>
          </InfoGame>
        </Modal>
      )}
      <Container>
        <Header>
          <Logo src={LogoSmart} />
          <h1>Smart Games</h1>
        </Header>
        <Content>
          <FeedContainer>
            {games.map((game) => (
              <GameCard key={game.id_game}>
                <GameImage>
                  <img src={game.image} alt="Imagem Game"></img>
                </GameImage>
                <Informations>
                  <h1>{game.name}</h1>
                  <InfoPlatforms>
                    {game.__platforms__.map((platform) => (
                      <h3>{platform.name}</h3>
                    ))}
                  </InfoPlatforms>
                  <p>{game.description}</p>
                </Informations>
                <Values>
                  <h1>R${game.value.toFixed(2)}</h1>
                  <ButtonBuy>
                    <p onClick={() => handleOpenmodal(game)}>DETALHES</p>
                  </ButtonBuy>
                </Values>
              </GameCard>
            ))}
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default Home;
