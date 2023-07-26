import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  /* height: 300px; */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  justify-content: center;
  align-items: center;

  & button {
    padding: 10px;
    width: fit-content;
    align-self: center;
  }
`;
