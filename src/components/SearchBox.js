import React, { useContext } from "react";
import Header from "../components/layout/Header";
import { HomeContext } from "../context/MoviesDataContext";
import { Container } from "../styles/components/stylesSearchBox";

function SearchBox() {
  const { searchHandler } = useContext(HomeContext);

  return (
    <>
      <Header />
      <Container>
        <p>
          <strong>MovieIt</strong> - Uma lista completa: Series e Filmes das
          mais famosas TVs de entreterimento
        </p>
        <div>
          <input
            type="text"
            onChange={(e) => searchHandler(e.target.value)}
            placeholder="Procurar no MovieIt"
          />
        </div>
      </Container>
    </>
  );
}

export default SearchBox;
