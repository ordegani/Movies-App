import React, { useEffect, useState } from "react";
import Movie from "./Movie";
// import Axios from "axios";

const Main = () => {
  //set
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState (search);
  const [search, setSearch] = useState("");
  //fetch
  const getMovies = async () => {
    const apikey = `b8dd69ac`;
    let query = ;
    const response = await fetch(
      `http://www.omdbapi.com/?t=${query}&apikey=${apikey}`
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
    <div className="moviesContainer">hi
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
