import { useContext, useState, FormEvent, ChangeEvent } from "react";
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
import { useDispatch } from "react-redux";
import { requestSuggestions } from "../../store/actions/saga-actions/sagaActions";

function SearchBox() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const {
    searchHandler,
    moviesSuggestions,
    isLoading,
    targetSearch,
  } = useContext(MovieDataContext);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmitSearchPage = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/search?body=${query}`);
  };

  return (
    <>
      {moviesSuggestions.tv_shows.length > 0 && isSearching && (
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
          <form onSubmit={handleSubmitSearchPage} autoComplete="off">
            <button type="submit">
              <SearchIcon width={25} height={25} />
            </button>

            <input
              type="text"
              onChange={(e) =>
                dispatch(requestSuggestions(e.target.value)) &&
                setQuery(e.target.value)
              }
              placeholder="Procurar no MovieIt ..."
            />
          </form>
        </SearchBoxContainer>
        <div className="searchFAB">
          <Scroll to={`${!isSearching && "movieitMainHeader"}`} smooth={true}>
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
          {moviesSuggestions.tv_shows.length > 0 &&
            (isLoading ? (
              <Loading />
            ) : (
              <ul>
                {moviesSuggestions.tv_shows
                  .slice(0, 5)
                  .map(
                    ({
                      id,
                      permalink,
                      image_thumbnail_path,
                      name,
                      start_date,
                      status,
                    }: TvShowTypes) => {
                      return (
                        <Link key={id} href={`/shows/${permalink}`}>
                          <li>
                            <div>
                              <Image
                                loading="eager"
                                layout="responsive"
                                width={100}
                                height={180}
                                src={`${image_thumbnail_path}`}
                                quality={40}
                              />
                            </div>
                            <div>
                              <strong> {name} </strong>
                              <p>
                                {start_date
                                  ? `Lançado ${moment(start_date).fromNow(
                                      true
                                    )} atrás.`
                                  : "Indefinido!"}
                              </p>
                            </div>
                            <div>
                              <span>{status}</span>
                            </div>
                          </li>
                        </Link>
                      );
                    }
                  )}
                <Link href={`/search?body=${targetSearch}`}>
                  <ol>
                    <li>
                      CLIQUE PARA VER {moviesSuggestions.total}
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
