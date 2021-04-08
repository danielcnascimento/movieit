import { useRouter } from "next/router";

import { Container } from "../../styles/pages/stylesShows";

import Header from "../../components/layout/Header";
import DetailsSection from "../../components/layout/DetailsSection";
import SeasonsSection from "../../components/layout/SeasonSection";

function Shows({ tvShow }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Container>
        <section>
          <DetailsSection tvShow={tvShow} />
        </section>

        <section>
          <SeasonsSection tvShow={tvShow} />
        </section>
      </Container>
    </>
  );
}

//most popular shows generation.
export const getStaticPaths = async () => {
  const res = await fetch("https://www.episodate.com/api/most-popular");
  const mostPops = await res.json();

  const paths = mostPops.tv_shows.map((show) => {
    return { params: { permalink: show.permalink } };
  });

  return {
    paths,
    fallback: true,
  };
};

//fetching details.
export const getStaticProps = async (ctx) => {
  const { permalink } = ctx.params;

  const res = await fetch(
    `http://www.episodate.com/api/show-details?q=${permalink}`
  );
  const show = await res.json();
  const { tvShow } = show;

  return {
    props: { tvShow },
    revalidate: 10,
  };
};

export default Shows;
