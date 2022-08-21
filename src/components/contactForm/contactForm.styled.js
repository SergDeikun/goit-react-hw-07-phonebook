import styled from 'styled-components';

export const Input = styled.input`
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

export const ButtonSubmit = styled.button`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: rgb(113, 113, 238);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
  }
`;
