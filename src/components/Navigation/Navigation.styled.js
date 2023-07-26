import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: lightgrey;
  padding: 1rem;
`;

export const StyledLogoLink = styled(NavLink)`
  /* padding: 0 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  text-decoration: none;
  color: black;
  box-shadow: 2px 2px 5px black;
  transition-duration: 250ms;

  &.active,
  &:hover {
    color: white;
    background-color: #445566;
    box-shadow: 0px 0px 1px black;
  }
`;
