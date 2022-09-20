import { FontStyles } from '../fonts/fonts';
import { AppWrapper, GlobalStyle } from './style';
import Title from '../title/title';

function App(): JSX.Element {

  return (
    <>
      <FontStyles />
      <GlobalStyle />
      <AppWrapper>
        <Title>Поиск</Title>
      </AppWrapper>
    </>
  );
}

export default App;

