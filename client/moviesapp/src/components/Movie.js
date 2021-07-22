import React from "react";

export default function Movie(props) {
  return (
    <div className="container">
      <h2>Movie: {props.title}</h2>
      <h3>{props.release}</h3>
      <p>{props.overview}</p>
      <img src={props.img} width="200" height="200" />
      <h3>Rating: {props.rating}</h3>
    </div>
  );
}
