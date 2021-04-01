import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { Container, Header } from "../styles/components/stylesSearchBox";

function SearchBox() {
  const { makeSearch } = useContext(HomeContext);

  return (
    <>
      <Header>
        <div>
          <strong>Movie</strong>
          <span>It</span>
        </div>
      </Header>
      <Container>
        <p>
          <strong>MovieIt</strong> - Uma lista completa: Series e Filmes das
          mais famosas TVs de entreterimento
        </p>
        <div>
          <input
            type="text"
            onKeyPress={(e) => makeSearch(e.target.value)}
            placeholder="Procurar no MovieIt"
          />
        </div>
      </Container>
    </>
  );
}

export default SearchBox;
