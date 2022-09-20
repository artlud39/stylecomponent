import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin: 0;
  color: ${(props) => props.color || '#050510'};
`;
