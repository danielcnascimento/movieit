import Head from "next/head";
import { Container } from "../styles/pages/Home";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>olá ! bem vindo ao MovieIt</h1>
    </Container>
  );
}
