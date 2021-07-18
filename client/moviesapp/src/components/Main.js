import React, { useEffect, useState } from "react";
import Movie from "./Movie";
// import Axios from "axios";

const Main = () => {
  //useState
  const [movie, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(search);

  //update query
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  //fetch
  const getMovies = async () => {
    const apikey = `b8dd69ac`;
    const response = await fetch(
      `http://www.omdbapi.com/?t=${query}&apikey=${apikey}`
    );
    const data = await response.json();

    setMovies(data);
  };
  console.log(movie);

  //useEffect
  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-field"
          placeholder="choose film"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="Submit">
          Search
        </button>
      </form>
      <div className="moviesContainer">
        {/* {movies.map((movie, index) => ( */}
        <Movie
          key={movie.index}
          id={movie.index}
          title={movie.Poster}
          image={movie.Title}
          ImdbRating={movie.imdbRating}
        ></Movie>
        {/* )) */}
        {/* } */}
      </div>
    </div>
  );
};

export default Main;
