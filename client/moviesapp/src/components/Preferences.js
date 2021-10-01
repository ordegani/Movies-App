import React, { useEffect, useState } from "react";
import "../App.css";
import Movie from "./Movie";

export default function Preferences() {
  const modeChange = (e) => {};
  return (
    <div>
      <button>Dark</button>
      <button>Light</button>
    </div>
  );
}
