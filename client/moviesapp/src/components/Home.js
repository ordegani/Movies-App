import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import "../App.css";

export default function Home() {
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

  return (   
    <div className="moviesContainer">
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          release={movie.release_date}
          // overview={movie.overview}
          img={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </div>    
  );
}
