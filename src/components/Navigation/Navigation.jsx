// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu';
import { AuthMenu } from 'components/AuthMenu';
import { StyledHeader, StyledLogoLink } from './Navigation.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlenderPhone } from '@fortawesome/free-solid-svg-icons';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link> */}
      <StyledLogoLink to="/">
        {/* <i
          className="fa fa-phone"
          aria-hidden="true"
          style={{ fontSize: '30px' }}
        ></i> */}
        <FontAwesomeIcon icon={faBlenderPhone} fontSize={25} />
      </StyledLogoLink>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </StyledHeader>
  );
};
