import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ButtonDelete = styled.button`
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  background-color: rgb(113, 113, 238);
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
  }
`;
