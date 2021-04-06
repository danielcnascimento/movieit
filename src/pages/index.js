import Head from "next/head";

import { Container } from "../styles/pages/stylesHome";

import SearchBox from "../components/SearchBox";
import Paginations from "../components/Paginations";
import Releases from "../components/Releases";

import { MoviesDataProvider } from "../context/MoviesDataContext";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoviesDataProvider releases={props}>
        <SearchBox />
        <Container>
          <section>
            <Releases />
          </section>
          <div>
            <Paginations />
          </div>
        </Container>
      </MoviesDataProvider>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://www.episodate.com/api/most-popular");
  const api_releases = await res.json();
  const { total, page, pages, tv_shows } = api_releases;

  return {
    props: {
      page,
      pages,
      tv_shows,
    },
  };
};
