import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #394149;
  border-radius: 4px;
  padding: 12px;
  width: 100%;

  border: 2px solid #394149;
  color: #969d9e;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #f7a21e;
      border-color: #f7a21e;
    `}

  ${props =>
    props.isField &&
    css`
      color: #f7a21e;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    font-size: 12px;
    &::placeholder {
      color: #f4ede8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
