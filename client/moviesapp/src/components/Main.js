import React, { useEffect, useState } from "react";

export default Main = () => {
  //set
  const [movies, setMovies] = useState([]);
  //fetch
  const apikey = `b8dd69ac`;

  const getMovies = async () => {
    
    const response = await fetch(
      `http://www.omdbapi.com/?t=free+willy&apikey=${apikey}`);
    const data = await response.json();

    setMovies(data.hits);

    console.log(data.hits);
  };
};
