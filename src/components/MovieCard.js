import React from "react";
import {
  Contain,
  ImageContainer,
  Titles,
} from "../styles/components/stylesMovieCard";

const MovieCard = () => {
  return (
    <Contain>
      <ImageContainer>
        <img src="icons/movie.svg" width={150} height={150} />
      </ImageContainer>

      <Titles>Movie name </Titles>
      <Titles>Movie state </Titles>
    </Contain>
  );
};

export default MovieCard;
