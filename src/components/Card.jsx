import React from "react";
import classes from "./MoviesListContainer.module.css";
import { IMG_PATH } from "../assets/constents";

const Card = ({
  movieDetailsHandler,
  poster_path,
  title,
  vote_average,
  overview,
  id,
}) => {
  return (
    <>
      <div
        className={classes.cardContainer}
        onClick={() => {
          movieDetailsHandler(id);
        }}
      >
        <img
          src={`${IMG_PATH}${poster_path}`}
          alt="img"
          style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
        />
        <div className={classes.textContainer}>
          <div className={classes.titleContainer}>
            <h6>{title}</h6>
            <div>({vote_average})</div>
          </div>
          <div className={classes.discription}>{overview}(2 Lines)</div>
        </div>
      </div>
    </>
  );
};

export default Card;
