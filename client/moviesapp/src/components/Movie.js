import React from "react";

export default function Movie(key, id, title, image, ImdbRating) {
  return (
    <div className="movie">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <h3>{ImdbRating}</h3>
    </div>
  );
}
