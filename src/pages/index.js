import Head from "next/head";
import SearchBox from "../components/SearchBox";
import { Container } from "../styles/pages/stylesHome";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBox />
    </Container>
  );
}
