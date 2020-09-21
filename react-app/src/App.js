import React from "react";
import image from "../assets/img/31253.jpg";
import { Container } from "./App.css";

function App() {
  return (
    <div className="content">
      <br />
      <img width={800} src={image} />

      <h1>Basic Setup</h1>
      <ul>
        <li>Django</li>
        <li>Django + Authentication</li>
        <li>React</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>JWT Authentication</li>
        <li>REST API</li>
      </ul>
      <a href="accounts/logout">Logout</a>
    </div>
  );
}

export default App;
