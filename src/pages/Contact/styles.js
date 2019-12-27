import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-family: 'Roboto';
    color: #fff;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    font-family: 'Roboto', sans-serif;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 500px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 20px;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 200px;
      width: 500px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      margin-bottom: 20px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      height: 44px;
      border-radius: 4px;
      border: none;
      background: #3b9eff;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
`;
