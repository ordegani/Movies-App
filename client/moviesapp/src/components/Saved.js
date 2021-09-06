import { React, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";

export default function Saved({save, setsave}) {
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("http://localhost:5000/");
      console.log(data);
    };
    fetch();
  }, []);

  save.forEach((element) => {
    console.log(element);
  });
  const remove = (element) => {
    setsave(save.filter((save) => save.title !== element.title));
  };

  // useEffect(() => {
  //   const postSave = () => {
  //     axios.post("/api/users/login", save).then((res) => console.log(res));
  //     console.log(save);
  //   };
  //   return () => {
  //     postSave();
  //   };
  // }, [save]);

  return (
    <div className="homeContainer">
      <button
        className={save == [] ? "hidden" : "reset"}
        //TODO axios.delet
        onClick={() => setsave([])}
      >
        Reset
      </button>
      ♥
      <div className="savedMoviesContainer">
        {save.map((movie) => (
          <Movie
            title={movie.title}
            release={movie.release}
            overview={movie.overview}
            img={movie.img}
            rating={movie.rating}
            onClick={remove}
            text="Delete"
          />
        ))}
      </div>
    </div>
  );
}
