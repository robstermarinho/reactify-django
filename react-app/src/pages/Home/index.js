import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import image from "../../../assets/img/31253.jpg";

function Home() {
  const user_email = document
    .querySelector("meta[name='d-email']")
    .getAttribute("content");

  return (
    <>
      <Header />
      <Container>
        <br />
        <img width={1200} src={image} />

        <h1>Hello {user_email}</h1>
        <p>This is a basic setup for:</p>

        <ul>
          <li>Django</li>
          <li>Django + Authentication</li>
          <li>React</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>JWT Authentication</li>
          <li>REST API</li>
        </ul>
        <a href="/accounts/logout"> Logout</a>
      </Container>
    </>
  );
}

export default Home;
