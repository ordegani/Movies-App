import React, {useEffect, useState} from 'react';

const main = () =>{
const [movies, setMovies] = useState([]);

const apikey = `b8dd69ac`;

const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`);
    const data = await response.json();
    setMovies(data.hits);
      console.log(data.hits);
  };
}