import { useContext } from "react";

import MovieCard from "../components/layout/MovieCard";

import { ReleaseContainer } from "../styles/components/stylesReleases";

import { HomeContext } from "../context/MoviesDataContext";

function Releases() {
  const { moviesData } = useContext(HomeContext);

  return (
    <ReleaseContainer>
      {moviesData.shows &&
        moviesData.shows.map((show) => (
          <div key={show.id}>
            <MovieCard show={show} />
          </div>
        ))}
    </ReleaseContainer>
  );
}

export default Releases;
