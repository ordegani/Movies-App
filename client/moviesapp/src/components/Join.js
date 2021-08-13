import { React, useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Join() {
  let username;
  const saveNewUser = (username) => {
    axios
      .post("http://localhost:5000/add", username)
      .then((res) => console.log(res.data));
  };
  // let email;
  // let password;
  // let firstName;
  // let lastName;

  //     const saveEmail=(e)=>{
  //         req.email=e;
  //         }

  //     const savePassword=(e)=>{
  //         setUser({"password":e})
  //     }

  //     const saveFirstName=(e)=>{
  //         setUser({"firstName":e})
  //     }
  //     const saveLastName=(e)=>{
  //         setUser({"lasName":e})
  //     }

  // }

  return (
    <div className="joinContainer">
      <h2>Welcome To Movie App!</h2>
      <form className="joinForm">
        {/* <input
          className="input"
          placeholder="email"
          type="text"
          value={email}
         
        /> */}
        {/* <input
          className="input"
          placeholder="password"
          type="text"
          value={password}
       
        /> */}
        {/* <input
          className="input"
          placeholder="name"
          type="text"
          value={firstName}
     
        /> */}
        <input
          className="input"
          placeholder="Username"
          type="text"
          value={username}
          onChange={saveNewUser}
        />
        <button className="submit" type="Submit">
          Join
        </button>
      </form>
    </div>
  );
}
