import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main{
    margin-bottom: 8vh;
    background-color: aliceblue;
  }
  
`;

export default GlobalStyle;
