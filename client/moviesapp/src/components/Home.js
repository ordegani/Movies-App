import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import "../App.css";

export default function Home({ save, setsave, mode }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=5a1afd222f50a8c3a063760ec102b675&total_pages=1`
      );
      setMovies(response.data.results);
    };
    getMovies();
  }, []);

  const addToSaved = (m) => {
    let isExists = false;

    save.find((item) => {
      if (item.title === m.title) {
        isExists = true;
        console.log("double");
      }
    });

    if (!isExists) {
      setsave((save) => [...save, m]);
      console.log(m);
    }
  };
  return (
    <div className="homeContainer">
      <h2>Top rated today</h2>
      <div className="moviesContainer">
        {movies.map((movie) => (
          <Movie
            title={movie.title}
            release={movie.release_date}
            overview={movie.overview}
            img={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            rating={movie.vote_average}
            text="♥"
            onClick={addToSaved}
          />
        ))}
      </div>
    </div>
  );
}
