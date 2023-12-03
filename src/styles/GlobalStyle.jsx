import { createGlobalStyle } from 'styled-components';
import 'typeface-fira-sans';
import 'typeface-oswald';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Oswald', 'Fira Sans', sans-serif; 
  }

  .section {
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;

    @media screen and (min-width: 360px) and (max-width: 480px) {
      max-width: 480px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      max-width: 768px;
    }

    @media screen and (min-width: 769px) {
      max-width: 1280px;
    }
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }
`;