import React, { useEffect, useState } from "react";
import "../App.css";
import Movie from "./Movie";

export default function Preferences({mode, setmode}) {

  const updateMode = (e) => {
    setmode(e.target.value);
    console.log(mode);
  };

  return (
    <div>
      <button value="dark" onClick={updateMode}>
        Dark
      </button>
      <button value="light" onClick={updateMode}>
        Light
      </button>
    </div>
  );
}
