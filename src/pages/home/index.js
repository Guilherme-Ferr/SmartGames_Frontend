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
  Informations,
  MapLocation,
  ModalInfo,
  StoreMapLocation,
  Stores,
  Values,
} from "./styles";
import Overwatch from "../../assets/overwatch.jpg";
import Aranha from "../../assets/aranha.png";
import { useState } from "react";
import Modal from "../../components/modalGame";

function Home() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <Modal handleClose={() => setModal(false)} title="Comprar Jogo">
          <InfoGame>
            <ModalInfo>
              <GameFullImage>
                <img src={Overwatch} alt="Imagem Jogo"></img>
              </GameFullImage>
              <FullInformations>
                <h1>Overwatch</h1>
                <p>
                  Spider-Man é um jogo eletrônico de ação-aventura desenvolvido
                  pela Insomniac Games publicado pela Sony Interactive
                  Entertainment. É baseado nos personagens, mitologia e
                  adaptações em outras mídias do super-herói de histórias em
                  quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado
                  exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na
                  história, o criminoso super-humano Senhor Negativo organiza um
                  plano para se vingar do prefeito Norman Osborn e assumir o
                  controle do submundo criminal de Nova Iorque. O Homem-Aranha
                  precisa proteger a cidade assim que o Senhor Negativo ameaça
                  lançar um vírus mortal por toda a área, ao mesmo tempo que é
                  forçado a lidar com seus problemas pessoais como Peter Parker.
                </p>
                <GameValue>
                  <h3>PS4</h3>
                  <h3>Xbox</h3>
                </GameValue>
                <GameValue>
                  <GameValueBox>
                    <p>R$ 250,00</p>
                  </GameValueBox>
                  <ButtonFinishBuy>
                    <p>COMPRAR</p>
                  </ButtonFinishBuy>
                </GameValue>
              </FullInformations>
            </ModalInfo>
            <h1>Lojas Disponiveis Para Compra:</h1>
            <Stores>
              <StoreMapLocation>
                <h3>Loja Tamboré</h3>
                <MapLocation></MapLocation>
              </StoreMapLocation>
            </Stores>
          </InfoGame>
        </Modal>
      )}
      <Container>
        <Header>
          <h1>Smart Games Ltda.</h1>
        </Header>
        <Content>
          <FeedContainer>
            <GameCard>
              <GameImage>
                <img src={Aranha} alt="Imagem Jogo"></img>
              </GameImage>
              <Informations>
                <h1>Overwatch</h1>
                <h3>Plataforma</h3>
                <p>
                  Spider-Man é um jogo eletrônico de ação-aventura desenvolvido
                  pela Insomniac Games publicado pela Sony Interactive
                  Entertainment. É baseado nos personagens, mitologia e
                  adaptações em outras mídias do super-herói de histórias em
                  quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado
                  exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na
                  história, o criminoso super-humano Senhor Negativo organiza um
                  plano para se vingar do prefeito Norman Osborn e assumir o
                  controle do submundo criminal de Nova Iorque. O Homem-Aranha
                  precisa proteger a cidade assim que o Senhor Negativo ameaça
                  lançar um vírus mortal por toda a área, ao mesmo tempo que é
                  forçado a lidar com seus problemas pessoais como Peter Parker.
                </p>
              </Informations>
              <Values>
                <h1>R$ 250,00</h1>
                <ButtonBuy>
                  <p onClick={() => setModal(true)}>COMPRAR</p>
                </ButtonBuy>
              </Values>
            </GameCard>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default Home;
