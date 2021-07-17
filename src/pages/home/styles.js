import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
  }

  justify-content: center;
  background-color: var(--secondary);
  border-bottom: 1px solid var(--primary);
  box-shadow: 0px 1px 5px var(--darkGray);
`;

export const Content = styled.div`
  width: 1280px;
  height: 100%;
  padding-top: 60px;
  display: flex;
  background-color: var(--darkGray);
  justify-content: center;
`;

export const FeedContainer = styled.div`
  width: 95%;
  height: inherit;
  align-items: center;
  gap: 10px;
  overflow-y: auto;
`;

export const GameCard = styled.article`
  width: 100%;
  height: 300px;
  padding: 10px;
  margin-top: 8px;
  background-color: var(--secondary);
  border-radius: 8px;
  display: flex;
`;

export const GameImage = styled.div`
  width: 20%;
  height: 100%;

  > img {
    width: 100%;
    height: inherit;
  }
`;

export const Informations = styled.div`
  width: 60%;
  height: 100%;
  padding: 10px;
  background-color: var(--secondary);
  border-radius: 4px;
  word-break: break-all;
  overflow-y: auto;

  > h1 {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 18px;
  }

  > h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 18px;
  }

  > p {
    font-size: 18px;
    padding: 10px 5px;
    border-left: 4px solid var(--primary);
  }
`;

export const Values = styled.div`
  width: 20%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  border-radius: 4px;
  text-align: center;

  > h1 {
    font-size: 30px;
    font-weight: bold;
    transition: 0.2s;
  }
`;

export const ButtonBuy = styled.button`
  width: 100%;
  height: 30%;
  padding: 10px;
  margin-top: 8px;
  background-color: #00b51e;
  border-radius: 16px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-color: black;
  display: flex;

  > p {
    font-size: 26px;
    padding: 10px 5px;
  }
`;

export const InfoGame = styled.div`
  width: 1200px;
  height: 900px;
  margin: 20px;
  background-color: var(--primary);
`;

export const ModalInfo = styled.div`
  width: 100%;
  height: 70%;
  margin-bottom: 20px;
  background-color: var(--light);
  word-break: break-all;
  overflow-y: auto;
  display: flex;
  text-align: center;
  flex-direction: row;
`;

export const GameFullImage = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const FullInformations = styled.div`
  width: 40%;
  height: 100%;
  padding: 10px;
  background-color: var(--secondary);
  word-break: break-all;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 58px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  > h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  > p {
    font-size: 26px;
    padding: 10px 5px;
    margin-bottom: 24px;
  }
`;

export const GameValue = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: center;

  > h3 {
    font-size: 18px;
    font-weight: bold;
    margin-right: 14px;
  }

  > p {
    font-size: 26px;
    padding: 10px 5px;
  }
`;

export const GameValueBox = styled.div`
  width: 200px;
  height: 50px;
  padding: 10px;
  margin-right: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 8px;
  background-color: var(--primary);
  border-radius: 16px;
  border-color: black;

  > p {
    font-size: 26px;
    padding: 10px 5px;
  }
`;

export const ButtonFinishBuy = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 8px;
  background-color: #00b51e;
  border-radius: 16px;
  border-color: black;

  > p {
    font-size: 26px;
    padding: 10px 5px;
  }
`;

export const Stores = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  text-align: center;
  flex-direction: row;
  /* background-color: var(--dark); */
`;

export const StoreMapLocation = styled.div`
  width: 33%;
  height: 90%;
  margin-top: 20px;
  margin-left: 4px;
  /* background-color: var(--darkGray); */

  > h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 18px;
  }
`;

export const MapLocation = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  /* background-color: var(--light); */
`;
