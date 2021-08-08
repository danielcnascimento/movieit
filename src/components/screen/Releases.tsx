import { RootState } from "../../store/reducers";
import Link from "next/link";

import MovieCard from "../layout/MovieCard";
import { useSelector } from "react-redux";

import {
  ReleaseContainer,
  ReleaseTitle,
} from "../../styles/components/stylesReleases";

interface ReleasesProps {
  title: string;
}

function Releases({ title }: ReleasesProps) {
  const moviesData = useSelector((state: RootState) => state.movieData);

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
