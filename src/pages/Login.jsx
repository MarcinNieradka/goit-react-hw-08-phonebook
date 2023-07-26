import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm, StyledWrapper } from './StyledForms.styled';
import { StyledButton } from './Login.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <StyledButton type="submit">
          <FontAwesomeIcon icon={faSignInAlt} /> Log In
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};
