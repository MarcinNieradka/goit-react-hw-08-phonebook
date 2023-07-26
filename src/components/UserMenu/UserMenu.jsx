import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

// import { NavLink } from 'react-router-dom';
import { StyledLogOutButton } from 'pages/Login.styled';
import { StyledNavLink } from 'components/AuthMenu/AuthMenu.styled';
import { StyledNav } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <StyledNav>
      <p>
        Welcome, <b>{user.email}</b>
      </p>
      <StyledNavLink to="/Contacts" end>
        Your Contacts
      </StyledNavLink>
      <StyledLogOutButton onClick={() => dispatch(logOut())}>
        Logout... <FontAwesomeIcon icon={faSignOut} />
      </StyledLogOutButton>
    </StyledNav>
  );
};
