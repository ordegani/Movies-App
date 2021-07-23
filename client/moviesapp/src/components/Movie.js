import React from "react";
import "../App.css";

export default function Movie(props) {
  return (
    <div className="movieContainer">
      <h4>Movie: {props.title}</h4>
      <img src={props.img} width="300" height="300" alt="img" />
      <h5> realeased in: {props.release? props.release:"no information found"}</h5>
      <h6>Rating: {props.rating}</h6>
      <p>{props.overview}</p>
    </div>
  );
}
