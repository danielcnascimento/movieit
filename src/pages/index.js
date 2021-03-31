import Head from "next/head";
import SearchBox from "../components/SearchBox";
import { Container } from "../styles/pages/stylesHome";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

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
            hidePrevButton="true"
            hideNextButton="true"
          />
        </div>
      </Container>
    </>
  );
}
