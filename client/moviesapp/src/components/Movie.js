import React from "react";
import "../App.css";

export default function Movie({
  title,
  release,
  overview,
  img,
  rating,
  onClick,
  text,
}) {
  
  return (
    <div className="movieContainer">
      <h4>{title}</h4>
      <img src={img} width="300" height="300" alt="img" />
      <h5> realeased in: {release ? release : "no information found"}</h5>
      <h6>Rating: {rating}</h6>
      <button
        className="saved"
        onClick={() => onClick({ title, release, overview, img, rating })}
        type="Submit"
      >
        {text}
      </button>

      <p>{overview}</p>
    </div>
  );
}
