import { Container } from "../styles/components/stylesSearchBox";

function SearchBox() {
  return (
    <Container>
      <header>
        <div>
          <strong>Movie</strong>
          <span>It</span>
        </div>
      </header>
      <p>
        <strong>MoveIt</strong> - Uma lista completa Series e Filmes das mais
        famosas TVs de entreterimento
      </p>
      <div>
        <input type="text" placeholder="Procurar no MovieIt" />
      </div>
    </Container>
  );
}

export default SearchBox;
