import React, { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Home() {
    const [movies, setmovies] = useState([]);

    const getMovies = async () => {
        const ApiKey = `5a1afd222f50a8c3a063760ec102b675`;
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=5a1afd222f50a8c3a063760ec102b675&total_pages=1&original_title=love`
        );
        const data = await response.json();
    
        setmovies(data.results);
        console.log(data);
      };

    
      useEffect(() => {
        getMovies();
      },[]);

    return (
        <div className="moviesContainer">
  {movies.map((movie, index, title) => (
          <Movie
            key={movie.index}
            id={movie.index}
 title = {movie.overview}
          />         
     ))}
        </div>
    )
}
