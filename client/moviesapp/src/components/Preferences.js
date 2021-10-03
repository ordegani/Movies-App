import React, { useEffect, useState } from "react";
import "../App.css";
import Movie from "./Movie";

export default function Preferences() {
  const [mode, setmode] = useState("");
  const updateMode = (e) => {
    setmode(e.target.value);
  };

  return (
    <div>
      <button value="dark" onClick={updateMode}>Dark</button>
      <button value="light" onClick={updateMode}>Light</button>
    </div>
  );
}
