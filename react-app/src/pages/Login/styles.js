import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 380px;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromTop} 1s;

  form {
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;
