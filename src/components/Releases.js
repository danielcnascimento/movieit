import { useContext } from "react";

import MovieCard from "../components/layout/MovieCard";

import {
  ReleaseContainer,
  ReleaseTitle,
} from "../styles/components/stylesReleases";

import { HomeContext } from "../context/MoviesDataContext";

function Releases() {
  const { moviesData, isSearching } = useContext(HomeContext);

  return (
    <>
      <ReleaseTitle>
        {!isSearching
          ? "Lançamentos"
          : moviesData.totalMoviesResults + " resultado(s) encontrados!"}
      </ReleaseTitle>
      <ReleaseContainer>
        {moviesData.shows &&
          moviesData.shows.map((show) => (
            <div key={show.id}>
              <MovieCard show={show} />
            </div>
          ))}
      </ReleaseContainer>
    </>
  );
}

export default Releases;
