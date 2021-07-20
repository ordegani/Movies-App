import React, { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Home() {
    const [movies, setmovies] = useState([]);

    const getMovies = async () => {
        const ApiKey = `5a1afd222f50a8c3a063760ec102b675`;
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&primary_release_year=2021&with_runtime.lte<1`
        );
        const data = await response.json();
    
        setmovies(movies);
      };
      console.log(movies);
    
      useEffect(() => {
        getMovies();
      },[movies]);

    return (
        <div className="moviesContainer">hi
  {/* {movies.results.map((movie, index) => (
          <Movie
            key={movie.index}
            id={movie.index}
 
          />          */}
        {/* ))} */}
        </div>
    )
}
