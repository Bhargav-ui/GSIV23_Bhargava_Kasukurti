import React, { useEffect, useState } from "react";
import classes from "./MoviesListContainer.module.css";
import { API_URL, IMG_PATH, SEARCH, SEARCH_API } from "../assets/constents";
import axios from "axios";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const MoviesListContainer = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesListCopy, setMoviesListCopy] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const moviesList = async () => {
      const res = await axios.get(API_URL);
      console.log("response", res.data.results);
      setMoviesList(res.data.results);
      setMoviesListCopy(res.data.results);
    };
    moviesList();
  }, []);

  const enterSearchHandler = (text) => {
    const newPacientes = moviesListCopy.filter((value) =>
      value.title.toLowerCase().includes(text.toLowerCase())
    );
    setMoviesList(newPacientes);
  };

  const movieDetailsHandler = (id) => {
    navigator(`/details/${id}`);
  };
  return (
    <>
      <Topbar searchHandler={enterSearchHandler} />
      <div className={classes.cardsContainer}>
        {moviesList.map((item) => (
          <Card
            key={item.id}
            movieDetailsHandler={movieDetailsHandler}
            poster_path={item.poster_path}
            title={item.title}
            vote_average={item.vote_average}
            overview={item.overview}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default MoviesListContainer;
