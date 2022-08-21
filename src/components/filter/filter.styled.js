import styled from 'styled-components';

export const FilterInput = styled.input`
  width: 200px;
  height: 20px;
  display: block;
  margin-top: 4px;
  border-radius: 4px;

  &:focus {
    border-color: blue;
    outline: none;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
