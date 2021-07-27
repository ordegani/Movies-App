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
            Welcome To Movie App!
            <form className="utheticationForm"> 
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
                    <input
          className="input3"
          placeholder="name"
          type="text"
          value={firstName}
     
        />
                    <input
          className="input4"
          placeholder="last name"
          type="text"
          value={lastName}
        //   onChange={saveLastName}
        />
      <button
        className="submit"

        type="Submit"
      >Submit
      </button>
            </form>
        </div>
    )
}
