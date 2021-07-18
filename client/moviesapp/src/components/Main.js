import React, { useEffect, useState } from "react";
import Movie from "./Movie";
// import Axios from "axios";

const Main = () => {
  //set
  const [movies, setMovies] = useState("");
  //fetch
  const getMovies = async () => {
    const apikey = `b8dd69ac`;
    const response = await fetch(
      `http://www.omdbapi.com/?t=free+willy&apikey=${apikey}`
    );
    const data = await response.json();

    setMovies(data);
  };
  console.log(movies);

  //useEffect
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="moviesContainer">
      {movies.map((movie, index) => (
        <Movie
          key={movie.index}
          id={movie.index}
          title={movie.Poster}
          image={movie.Title}
          ImdbRating={movie.imdbRating}
        ></Movie>
      ))}
    </div>
  );
};

export default Main;
