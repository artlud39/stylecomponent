import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`

@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-regular.woff2") format('woff2'),
       url("./fonts/inter-regular.woff") format('woff');
}

@font-face {
  font-style: normal;
  font-weight: 500;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-medium.woff2") format('woff2'),
       url("./fonts/inter-medium.woff") format('woff');
}

@font-face {
  font-style: normal;
  font-weight: 600;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-semibold.woff2") format('woff2'),
       url("./fonts/inter-semibold.woff") format('woff');
}

@font-face {
  font-style: normal;
  font-weight: 700;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-bold.woff2") format('woff2'),
       url("./fonts/inter-bold.woff") format('woff');
}
`;
