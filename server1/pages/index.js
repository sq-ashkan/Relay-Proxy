import { React, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
export default function Form() {
  const cookie = new Cookies();

  const registerUser = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/signin", {
        headers: { "Content-Type": "application/json" },
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then(function (response) {
        if (response.status == 200) {
          cookie.set("tokenFromServerOne", response.data, { path: "/" });
        }
      })
      .catch(function (error) {
        console.log("err");
      });
  };

  return (
    <div>
      <form onSubmit={registerUser}>
      <label htmlFor="username">username</label>
      <input
        id="name"
        name="username"
        type="text"
        autoComplete="username"
        required
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="text"
        autoComplete="password"
        required
      />
      <button type="submit">Register</button>
    </form>
    <br />
    <button>ACCES TO TARGET</button>
    </div>
  );
}
