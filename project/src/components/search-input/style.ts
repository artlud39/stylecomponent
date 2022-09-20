import styled from 'styled-components';

export const SearchInputStyled = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Введи имя, тег, почту...',
}))`
  width: 100%;
  border: none;
  border-radius: 16px;
  padding: 8px 44px;
  background: #F7F7F8;

    ::placeholder {
      color: #C3C3C6;
      font-size: 15px;
      font-weight: 500;
    }
`;

