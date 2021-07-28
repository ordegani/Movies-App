import {React, useState, useEffect} from 'react'
import "../App.css";

export default function Authentication() {
let email;
let password;
let firstName;
let lastName;

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

        <div className="autheticationContainer">
            <h2>Welcome To Movie App!</h2>
            <form className="utheticationForm"> 
            <input
          className="input"
          placeholder="email"
          type="text"
          value={email}
         
        />
                    <input
          className="input"
          placeholder="password"
          type="text"
          value={password}
       
        />
                    <input
          className="input"
          placeholder="name"
          type="text"
          value={firstName}
     
        />
                    <input
          className="input"
          placeholder="last name"
          type="text"
          value={lastName}
        //   onChange={saveLastName}
        />
      <button
        className="submit"

        type="Submit"
      >Join
      </button>
            </form>
        </div>
    )
}
