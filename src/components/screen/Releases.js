import { useContext } from "react";
import Link from "next/link";

import MovieCard from "../layout/MovieCard";

import {
  ReleaseContainer,
  ReleaseTitle,
} from "../../styles/components/stylesReleases";

import { MovieDataContext } from "../../context/MoviesDataContext";

function Releases({ title }) {
  const { moviesData } = useContext(MovieDataContext);

  return (
    <>
      <ReleaseTitle>{title}</ReleaseTitle>
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
  );
}

export default Releases;
