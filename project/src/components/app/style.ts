import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


export const AppWrapper = styled.div<{display: string}>`
  display: ${(props) => props.display || 'flex'};
  flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

 * {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
