import styled from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  flex-direction: column;
  h1 {
    margin: 15px;
    font-weight: 600;
    font-size: 20px;
  }

  p {
    margin: 15px;
    font-size: 16px;
  }
  ul li {
    margin: 8px;
    font-size: 16px;
  }

  a {
    margin: 20px;
  }

  .btn {
    background: #6c625c;
    height: 46px;
    border-radius: 3px;
    border: 0;
    padding: 0 10px;
    color: white;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background: #5f5651;
  }
`;
