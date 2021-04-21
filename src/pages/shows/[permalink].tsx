import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { Container } from "../../styles/pages/stylesShows";

import MovieMainHeader from "../../components/layout/MovieMainHeader";
import DetailsSection from "../../components/layout/DetailsSection";
import SeasonsSection from "../../components/layout/SeasonSection";
import Loading from "../../components/layout/Loading";

function Shows(show: TvShowTypes) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Ver {show.name} - Todos os Episódios - MovieIt!</title>
        <link rel="shortcut icon" href="movieit-icon.png" type="image/png" />
      </Head>
      <MovieMainHeader />
      <Container>
        <section>
          <DetailsSection {...show} />
        </section>

        <section>
          <SeasonsSection {...show} />
        </section>
      </Container>
    </>
  );
}

//permalink placeholder.
interface IParams extends ParsedUrlQuery {
  permalink: string;
}

//most popular shows generation.
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://www.episodate.com/api/most-popular");
  const mostPops: { tv_shows: { permalink: string }[] } = await res.json();

  const paths = mostPops.tv_shows.map((show) => {
    return { params: { permalink: show.permalink } };
  });

  return {
    paths,
    fallback: true,
  };
};

//fetching details.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { permalink } = ctx.params as IParams;

  const res = await fetch(
    `https://www.episodate.com/api/show-details?q=${permalink}`
  );
  const { tvShow } = await res.json();
  const show: TvShowTypes = tvShow;

  return {
    props: { ...show },
    revalidate: 10,
  };
};

export default Shows;
