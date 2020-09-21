import React from "react";
import image from "../assets/img/31253.jpg";
import { Container } from "./App.css";

function App() {
  const user_email = document
    .querySelector("meta[name='d-email']")
    .getAttribute("content");

  return (
    <div className="content">
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
    </div>
  );
}

export default App;
