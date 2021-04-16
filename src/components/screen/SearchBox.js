import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Link as Scroll } from "react-scroll";
import moment from "moment";

import MovieMainHeader from "../../components/layout/MovieMainHeader";

import { MovieDataContext } from "../../context/MoviesDataContext";

import {
  Container,
  SearchBoxContainer,
  SuggestionOverlay,
  SuggestionContainer,
} from "../../styles/components/stylesSearchBox";

import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/SearchRounded";
import CloseIcon from "@material-ui/icons/CloseRounded";
import Loading from "../layout/Loading";

function SearchBox() {
  const [isSearching, setIsSearching] = useState(false);
  const {
    searchHandler,
    moviesSuggestions,
    isLoading,
    targetSearch,
  } = useContext(MovieDataContext);
  const router = useRouter();

  return (
    <>
      {moviesSuggestions.shows.length > 0 && isSearching && (
        <SuggestionOverlay
          onClick={() => {
            setIsSearching(false);
          }}
        />
      )}

      <MovieMainHeader />

      <Container>
        <p>
          <strong>MovieIt</strong> - Uma lista completa: Series e Filmes das
          mais famosas TVs de entreterimento
        </p>
        <SearchBoxContainer
          style={isSearching ? { top: "4.7rem" } : { top: "-8rem" }}
        >
          <SearchIcon width={25} height={25} />

          <input
            type="text"
            onChange={(e) => searchHandler(e.target.value)}
            placeholder="Procurar no MovieIt ..."
          />
        </SearchBoxContainer>
        <div className="searchFAB">
          <Scroll to={!isSearching && "movieitMainHeader"} smooth={true}>
            <Fab onClick={() => setIsSearching(!isSearching)} color="secondary">
              {isSearching ? (
                <CloseIcon width={25} height={25} />
              ) : (
                <SearchIcon width={25} height={25} />
              )}
            </Fab>
          </Scroll>
        </div>
      </Container>

      <SuggestionContainer
        onClick={() => {
          setIsSearching(false);
        }}
        style={isSearching ? { top: "10rem" } : { display: "none" }}
      >
        <section>
          {moviesSuggestions.shows.length > 0 &&
            (isLoading ? (
              <Loading />
            ) : (
              <ul>
                {moviesSuggestions.shows.slice(0, 5).map((show) => {
                  return (
                    <Link key={show.id} href={`/shows/${show.permalink}`}>
                      <li>
                        <div>
                          <Image
                            loading="eager"
                            layout="responsive"
                            width={100}
                            height={180}
                            src={`${show.image_thumbnail_path}`}
                            quality={40}
                          />
                        </div>
                        <div>
                          <strong> {show.name} </strong>
                          <p>
                            {show.start_date
                              ? `Lançado ${moment(show.start_date).fromNow(
                                  true
                                )} atrás.`
                              : "Indefinido!"}
                          </p>
                        </div>
                        <div>
                          <span>{show.status}</span>
                        </div>
                      </li>
                    </Link>
                  );
                })}
                <Link href={`/search?body=${targetSearch}`}>
                  <ol>
                    <li>
                      CLIQUE PARA VER {moviesSuggestions.totalMoviesResults}
                      &nbsp;RESULTADOS.
                    </li>
                  </ol>
                </Link>
              </ul>
            ))}
        </section>
      </SuggestionContainer>
    </>
  );
}

export default SearchBox;
