import { useContext } from "react";
import Link from "next/link";

import MovieCard from "../layout/MovieCard";

import {
  ReleaseContainer,
  ReleaseTitle,
} from "../../styles/components/stylesReleases";

import { MovieDataContext } from "../../context/MoviesDataContext";

interface ReleasesProps {
  title: string;
}

function Releases({ title }: ReleasesProps) {
  const { moviesData } = useContext(MovieDataContext);

  return (
    <>
      <ReleaseTitle>{title}</ReleaseTitle>
      <ReleaseContainer>
        {moviesData.tv_shows &&
          moviesData.tv_shows.map((show: TvShowTypes) => (
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
