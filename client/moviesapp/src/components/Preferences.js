import React, { useEffect, useState } from "react";
import "../App.css";
import Movie from "./Movie";

export default function Preferences() {
    const [mode, setmode] = useState("")
  const modeChange = (e) => {e => setmode(e.target.value)};
  return (
    <div>
      <button>Dark</button>
      <button>Light</button>
    </div>
  );
}
