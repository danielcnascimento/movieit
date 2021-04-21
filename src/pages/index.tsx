import Head from "next/head";
import { GetStaticProps } from "next";

import { useDispatch } from "react-redux";
import { getMoviesData } from "../store/actions/movieActions";
import { useEffect } from "react";

import MovieMain from "../components/MovieMain";

export default function Home(props: GetMoviesDataType) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesData({ ...props }));
  }, [props]);

  return (
    <>
      <Head>
        <title>MovieIt | Filmes e Series mais Populares Online!</title>
        <link rel="shortcut icon" href="movieit-icon.png" type="image/png" />
      </Head>
      <MovieMain {...props} title={"Mais Populares"} />
    </>
  );
}

//Most popular shows - 20 results.
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://www.episodate.com/api/most-popular");
  const api_releases: GetMoviesDataType = await res.json();
  const { page, pages, tv_shows } = api_releases;

  return {
    props: {
      page,
      pages,
      tv_shows,
    },
    revalidate: 60,
  };
};
