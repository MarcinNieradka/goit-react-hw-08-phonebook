import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm, StyledWrapper } from './StyledForms.styled';
import { StyledButton } from './Login.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.login.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <input type="text" name="login" placeholder="login" required />
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <StyledButton type="submit">
          {' '}
          <FontAwesomeIcon icon={faUsers} /> Register account
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};
