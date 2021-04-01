import {
  CardContainer,
  CardHeader,
} from "../../styles/components/layout/stylesMovieCard";

const MovieCard = ({ show }) => {
  return (
    <CardContainer>
      <CardHeader>
        <img
          src={`${
            show.image_thumbnail_path
              ? show.image_thumbnail_path
              : "icons/movie.svg"
          }`}
        />
      </CardHeader>
      <footer>
        <strong>{show.name}</strong>
        <span className={`${show.status === "Running" ? "running" : "ended"}`}>
          {show.status}
        </span>
      </footer>
    </CardContainer>
  );
};

export default MovieCard;
