import { useContext } from "react";

import Link from "next/link";

import MovieCard from "../components/layout/MovieCard";
import Loading from "../components/layout/Loading";

import {
  ReleaseContainer,
  ReleaseTitle,
} from "../styles/components/stylesReleases";

import { MovieDataContext } from "../context/MoviesDataContext";

function Releases() {
  const { moviesData, isSearching, isLoading } = useContext(MovieDataContext);

  return (
    <>
      <ReleaseTitle>
        {!isSearching
          ? "Mais Populares"
          : moviesData.totalMoviesResults + " resultado(s) encontrados!"}
      </ReleaseTitle>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ReleaseContainer>
            {moviesData.shows &&
              moviesData.shows.map((show) => (
                <Link key={show.id} href={`/shows/${show.permalink}`}>
                  <div>
                    <MovieCard {...show} />
                  </div>
                </Link>
              ))}
          </ReleaseContainer>
        </>
      )}
    </>
  );
}

export default Releases;
