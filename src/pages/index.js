import Head from "next/head";

import MovieMain from "../components/MovieMain";

export default function Home(props) {
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

export const getStaticProps = async () => {
  const res = await fetch("https://www.episodate.com/api/most-popular");
  const api_releases = await res.json();
  const { page, pages, tv_shows } = api_releases;

  return {
    props: {
      page,
      pages,
      tv_shows,
    },
    revalidate: 10,
  };
};
