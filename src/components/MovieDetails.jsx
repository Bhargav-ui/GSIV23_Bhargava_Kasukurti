import React, { useEffect } from "react";
import {
  clearMovieDetailsAction,
  movieDetailsAction,
} from "../store/action/movieDetailsAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_PATH } from "../assets/constents";
import classes from "./MovieDetails.module.css";
import Topbar from "./Topbar";

const MovieDetailsBlock = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    poster_path,
    title,
    vote_average,
    original_language,
    release_date,
    overview,
  } = useSelector((state) => state.movieReducer.movieDetails);

  useEffect(() => {
    dispatch(movieDetailsAction(id));
    return () => {
      dispatch(clearMovieDetailsAction());
    };
  }, []);

  return (
    <>
      <Topbar title="Movie Details" />
      <div className={classes.mainContainer}>
        <img
          src={`${IMG_PATH}${poster_path}`}
          alt="img"
          style={{ width: "200px", borderRadius: "4px" }}
        />
        <div className={classes.textContainer}>
          <div className={classes.title}>
            <h6>{title}</h6>
            <div>({vote_average})</div>
          </div>
          <div className={classes.dateText}>
            {release_date} | {original_language}
          </div>
          <p className={classes.discription}>Description: {overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsBlock;
