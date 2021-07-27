import { React, useState, useEffect } from "react";
import "../App.css";

export default function Login() {
  let email;
  let password;
  let firstName;
  let lastName;

  return (
    <div className="loginContainer">
      Welcome Back :)
      <form>
        <input
          className="input1"
          placeholder="email"
          type="text"
          value={email}
        />
        <input
          className="input2"
          placeholder="password"
          type="text"
          value={password}
        />
        <button className="submit" type="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
