import { createGlobalStyle } from 'styled-components';
import 'typeface-fira-sans';
import 'typeface-oswald';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Oswald', 'Fira Sans', sans-serif; 
  }
`;