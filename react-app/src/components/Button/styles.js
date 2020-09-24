import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #f7a21e;
  height: 45px;
  border-radius: 4px;
  border: 0;
  padding: 0 12px;
  color: #394149;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.3s;
  font-size: 12px;
  &:hover {
    background: ${shade(0.1, '#f7a21e')};
  }

  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
