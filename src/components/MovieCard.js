import React from "react";
import {
  CardContainer,
  CardHeader,
} from "../styles/components/stylesMovieCard";

const MovieCard = () => {
  return (
    <CardContainer>
      <CardHeader>
        <img src="icons/movie.svg" width={150} height={150} />
      </CardHeader>
      <footer>
        <strong>Movie name</strong>
        <p>Movie state</p>
      </footer>
    </CardContainer>
  );
};

export default MovieCard;
