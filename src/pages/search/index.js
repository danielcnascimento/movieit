import React from "react";

import Head from "next/head";
import MovieMain from "../../components/MovieMain";

function Index(props) {
  return (
    <>
      <Head>
        <title>MovieIt</title>
        <link rel="shortcut icon" href="movieit-icon.png" type="image/png" />
      </Head>
      <MovieMain {...props} />
    </>
  );
}

//fetching details.
export const getServerSideProps = async (ctx) => {
  const { body } = ctx.query;
  let urlType;

  body ? (urlType = `search?q=${body}`) : (urlType = `search`);

  console.log(urlType);

  const res = await fetch(`http://www.episodate.com/api/${urlType}`);
  const api_releases = await res.json();

  const { total, page, pages, tv_shows } = api_releases;

  return {
    props: { total, page, pages, tv_shows },
  };
};

export default Index;
