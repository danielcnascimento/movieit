import { useContext } from "react";

import MovieCard from "../components/layout/MovieCard";

import { ReleaseContainer } from "../styles/components/stylesReleases";

import { HomeContext } from "../context/HomeContext";

function Releases() {
  const { shows } = useContext(HomeContext);

  return (
    <ReleaseContainer>
      {shows &&
        shows.map((show) => (
          <div key={show.id}>
            <MovieCard show={show} />
          </div>
        ))}
    </ReleaseContainer>
  );
}

export default Releases;
