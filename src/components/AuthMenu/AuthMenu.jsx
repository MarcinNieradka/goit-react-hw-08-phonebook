// import { NavLink } from 'react-router-dom';
import { StyledNavLink } from './AuthMenu.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

export const AuthMenu = () => {
  return (
    <nav>
      <StyledNavLink to="/login">
        <FontAwesomeIcon icon={faSignInAlt} /> Log In
      </StyledNavLink>
      <StyledNavLink to="/register">
        <FontAwesomeIcon icon={faUsers} /> Register
      </StyledNavLink>
    </nav>
  );
};
