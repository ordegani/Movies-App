import React, { useEffect, useState } from "react";
import "../App.css";

export default function Preferences({ mode, setmode }) {
  const updateMode = (e) => {
    setmode(e.target.value);

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
