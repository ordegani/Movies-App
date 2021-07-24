import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import "../App.css";

export default function Home({ setsave }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=5a1afd222f50a8c3a063760ec102b675&total_pages=1`
      );
      setMovies(response.data.results);
      console.log(response.data);
      console.log(response.data.page);
      console.log(response.data.results.length + " length");
    };
    getMovies();
  }, []);

  const [saved, setSaved] = useState([]);
  const addToSaved = (m) => {
    setSaved([...saved, m]);
    // console.log(saved);
    // setsave(m);
  };

  return (
    <div>
      <div className="moviesContainer">
        {movies.map((movie) => (
          <Movie
            title={movie.title}
            release={movie.release_date}
            overview={movie.overview}
            img={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            rating={movie.vote_average}
            onClick={addToSaved}
          />
        ))}
      </div>

      <div className="savedMoviesContainer">
        {saved.map((save) => (
          <Movie
            title={save.title}
            release={save.release_date}
            overview={save.overview}
            img={"https://image.tmdb.org/t/p/original" + save.poster_path}
            rating={save.vote_average}
            onClick={addToSaved}
          />
        ))}
      </div>
    </div>
  );
}
