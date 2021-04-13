import { useContext, useState } from "react";
import { Link as Scroll } from "react-scroll";

import Header from "../components/layout/Header";

import { MovieDataContext } from "../context/MoviesDataContext";

import {
  Container,
  SearchBoxContainer,
} from "../styles/components/stylesSearchBox";

import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/SearchRounded";
import CloseIcon from "@material-ui/icons/CloseRounded";

function SearchBox() {
  const [isSearching, setIsSearching] = useState(false);
  const { searchHandler } = useContext(MovieDataContext);

  return (
    <>
      <Header />
      <Container>
        <p>
          <strong>MovieIt</strong> - Uma lista completa: Series e Filmes das
          mais famosas TVs de entreterimento
        </p>
        <SearchBoxContainer
          style={isSearching ? { top: "8rem" } : { top: "-8rem" }}
        >
          <SearchIcon />

          <input
            type="text"
            onChange={(e) => searchHandler(e.target.value)}
            placeholder="Procurar no MovieIt ..."
          />
        </SearchBoxContainer>
        <div className="searchFAB">
          <Scroll to={!isSearching && "movieitMainHeader"} smooth={true}>
            <Fab
              onClick={() => setIsSearching(!isSearching)}
              color="secondary"
              aria-label="Procurar no MovieIt"
            >
              {isSearching ? <CloseIcon /> : <SearchIcon />}
            </Fab>
          </Scroll>
        </div>
      </Container>
    </>
  );
}

export default SearchBox;
