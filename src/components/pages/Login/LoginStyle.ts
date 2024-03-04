import styled from "styled-components";

export const Login = styled.div`
  width: 500px;
  height: 510px;
  border-radius: 40px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  img {
    width: 250px;
  }
`;

export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px;
  padding: 2rem;
  font-family: var(--font-family-text, "Charlie Text", sans-serif);
  p {
    font-size: 1.55rem;
    line-height: 1.2;
  }

  div.Input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  input {
    font-size: 1rem;
    padding: 0.5rem;
    width: 120%;
    background-color: rgb(250, 251, 252);
    border: 2px solid rgb(223, 225, 230);
    border-radius: 0.3rem;

    &:focus {
      transition: all 1s ease-in-out;
      border: 2px solid rgb(0, 82, 204);
      outline: none;
    }
  }
  button {
    width: 120%;
    height: 30px;
    border-radius: 5px;
    background: rgb(0, 82, 204);
    color: white;
    outline: none;
    border: none;
  }
`;
