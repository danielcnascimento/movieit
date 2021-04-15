import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import MovieMain from "../components/MovieMain";

function Index() {
  const [moviesResults, setMoviesResults] = useState({});
  let router = useRouter();
  const body = router.query.body;

  //fast fetch the results when query changes.
  useEffect(() => {
    fetchUpdate();
  }, [body]);

  const fetchUpdate = async () => {
    let urlType;

    body ? (urlType = `search?q=${body}`) : (urlType = `search`);

    const res = await fetch(`http://www.episodate.com/api/${urlType}`);
    const api_releases = await res.json();

    const { total, page, pages, tv_shows } = api_releases;
    setMoviesResults({ total, page, pages, tv_shows });
  };

  let title = !body ? "A - Z" : body;

  return (
    <>
      <Head>
        <title>MovieIt</title>
        <link rel="shortcut icon" href="movieit-icon.png" type="image/png" />
      </Head>
      <MovieMain {...moviesResults} title={`Você procurou por : ${title}`} />
    </>
  );
}

export default Index;
