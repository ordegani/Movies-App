import axios from "axios";
import { React, useState, useEffect } from "react";
import "../App.css";

export default function Login() {
  const getUsers=()=>{
    axios
  .post("http://localhost:5000/users/")
  //TODO condition to check if username=username2?
  .then((res) => console.log(res.data));
}
  return (
    <div className="loginContainer">
      <h2>Welcome Back</h2>
      <h2>🎬</h2>
      <form className="loginForm">
        <input
          className="input"
          placeholder="username"
          type="text"
          value={username2}
          onChange={getUsers}
        />
        {/* <input
          className="input"
          placeholder="password"
          type="text"
          value={password}
        /> */}
        <button className="submit" type="Submit">
          Go
        </button>
      </form>
    </div>
  );
}
