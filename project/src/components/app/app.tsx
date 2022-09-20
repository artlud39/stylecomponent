import { AppWrapper, GlobalStyle } from './style';
import Title from '../title/title';
import SearchInput from '../search-input/search-input';

function App(): JSX.Element {

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Title>Поиск</Title>
        <SearchInput />
      </AppWrapper>
    </>
  );
}

export default App;

