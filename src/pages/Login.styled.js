import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 2px 2px 5px #445566;
  transition-duration: 250ms;

  &.active,
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #445566;
    box-shadow: 0px 0px 1px black;
  }
`;

export const StyledLogOutButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: lightgrey;
  box-shadow: 2px 2px 5px #445566;
  transition-duration: 250ms;

  &.active,
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #aa0000;
    box-shadow: 0px 0px 1px black;
  }
`;
