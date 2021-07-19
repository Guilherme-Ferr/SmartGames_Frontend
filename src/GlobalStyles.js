import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --dark: #282a36;
    --darkGray: #4b4e5c;
    --light: #EDF2F4;
    --primary: #13203b;
    --secondary: #0b1426;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    width: 2px;
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-track{
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: var(--light);
  }

  body {
    font-family: sans-serif;
    color: var(--light);
  }

  button {
    font-weight: bold;
    color: var(--light);
    cursor: pointer;
    transition: .2s ease-in-out;

    :hover{
      background-color: var(--darkGray);
    }

    :active{
      transform: scale(0.80);
    }

    :disabled{
      background-color: transparent;
      border: 1px solid var(--darkGray);
      color: var(--darkGray);
    }
  }

`;
