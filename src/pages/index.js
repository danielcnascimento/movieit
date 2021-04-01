import Head from "next/head";
import { useState } from "react";

import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";

import { Container } from "../styles/pages/stylesHome";
import Pagination from "@material-ui/lab/Pagination";

export default function Home() {
  const [page, setPage] = useState(null);

  const handleChangePage = (event, thisPage) => event && setPage(thisPage);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBox />
      <Container>
        <section>
          <p>Lançamentos</p>
          <div>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <div className="pagination">
          <Pagination
            count={1000}
            onChange={handleChangePage}
            color="secondary"
            variant="outlined"
            hidePrevButton
            hideNextButton
          />
        </div>
      </Container>
    </>
  );
}
