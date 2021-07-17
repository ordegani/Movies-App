import React, { useEffect, useState } from "react";
// import Axios from "axios";

const Main = () => {
  //set
  const [movies, setMovies] = useState([]);
  //fetch
  const getMovies = async () => {
    const apikey = `b8dd69ac`;
    const response = await fetch(
      `http://www.omdbapi.com/?t=free+willy&apikey=${apikey}`
    );
    const data = await response.json();

    setMovies(data.hits);

    console.log(movies);
  };
  //useEffect
  useEffect(() => {
    getMovies();
  }, []);

  return <h1>({movies})</h1>;
};

export default Main;
