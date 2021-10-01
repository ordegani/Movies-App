import React, { useEffect, useState } from "react";
import "../App.css";
// import Axios from "axios";

const SearchForFilm = () => {
  //useState
  const [movie, setMovie] = useState([]);
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
  const getMovie = async () => {
    const apikey = `b8dd69ac`;
    const response = await fetch(
      `http://www.omdbapi.com/?t=${query}&apikey=${apikey}`
    );
    const data = await response.json();

    setMovie(data);
  };
  console.log(movie);

  //useEffect
  useEffect(() => {
    getMovie();
  }, [query]);

  return (
    <div className="Scontainer">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-field"
          placeholder="choose film"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="Submit">
          ▶
        </button>
      </form>
      <div className="SmovieContainer">
        <div className="movieInformation">
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt="" />
          <h3>{movie.Plot}</h3>
          <p>
            {movie.Country} {movie.Year}
          </p>
          <p>Language: {movie.Language}</p>
          <p>{movie.Genre}</p>
          <p>Director: {movie.Director}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Actors: {movie.Actors}</p>
          <p>{movie.Production}</p>
          <p>{movie.Runtime}</p>
          {useEffect(() => {
            <p>Rating: {movie.imdbRating}</p>;
          }, [movie])}
        </div>
      </div>
    </div>
  );
};

export default SearchForFilm;
