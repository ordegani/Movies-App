import React from "react";
import "../App.css";

export default function Movie(props) {
  return (
    <div className="movieContainer">
      <h4 className="movieTitle">Movie: {props.title}</h4>
      {/* <p>{props.overview}</p> */}
      <img src={props.img} width="300" height="300" alt="img" />
      <h5> realeased in: {props.release}</h5>
      <h5>Rating: {props.rating}</h5>
    </div>
  );
}
