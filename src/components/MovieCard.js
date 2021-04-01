import {
  CardContainer,
  CardHeader,
} from "../styles/components/stylesMovieCard";

const MovieCard = () => {
  return (
    <CardContainer>
      <CardHeader>
        <img src="icons/movie.svg" />
      </CardHeader>
      <footer>
        <strong>Movie name</strong>
        <p>Movie state</p>
      </footer>
    </CardContainer>
  );
};

export default MovieCard;
