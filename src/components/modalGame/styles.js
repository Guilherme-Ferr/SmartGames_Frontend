import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background-color: #333c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loginAnimation = keyframes`
  0%{
    bottom: 1000px;
    opacity: 0;
    transform: scale(0.01) rotate(0deg);
  }
  100%{
    top: 0px;
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

export const ModalContainer = styled.section`
  animation: ${loginAnimation} 0.7s;
  min-width: 250px;
  min-height: 250px;
  max-height: calc(100vh - 20px);
  padding: 20px;
  z-index: 19;
  overflow-y: auto;
  background-color: var(--secondary);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;
  position: relative;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--primary);
    }
  }

  > header {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin: 0px 20px;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    color: var(--primary);
  }
`;
