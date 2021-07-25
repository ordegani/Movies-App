import React from "react";
import Movie from "./Movie";

export default function Saved({ save, setsave }) {
  save.forEach((element) => {
    console.log(element);
  });
  const remove = (element) => {
    setsave(save.filter((save) => save.title !== element.title));
  };

  return (
    <div className="homeContainer">
      <button className="reset" onClick={() => setsave([])}>
        Reset Favorites
      </button>
      <div className="savedMoviesContainer">
        {save.map((movie) => (
          <Movie
            title={movie.title}
            release={movie.release}
            overview={movie.overview}
            img={movie.img}
            rating={movie.rating}
            onClick={remove}
            text="Delete"
          />
        ))}
      </div>
    </div>
  );
}
