import Head from "next/head";

import { Container } from "../styles/pages/stylesHome";

import SearchBox from "../components/SearchBox";
import Paginations from "../components/Paginations";
import Releases from "../components/Releases";

export default function Home() {
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
          <Releases />
        </section>
        <div>
          <Paginations />
        </div>
      </Container>
    </>
  );
}
