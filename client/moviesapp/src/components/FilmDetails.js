import React from "react";
import "../App.css";

export default function FilmDetails(props) {
  return (
    <div>
      <Movie
        title={e.title}
        release={e.release_date}
        // overview={movie.overview}
        img={"https://image.tmdb.org/t/p/original" + e.poster_path}
        rating={e.vote_average}
      />
    </div>
  );
}
