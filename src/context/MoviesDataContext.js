import { createContext, useState } from "react";
import { loadSearch } from "../services/api";

export const MovieDataContext = createContext({});

export const MoviesDataProvider = ({ children, releases }) => {
  const { tv_shows, page, pages } = releases;

  const [moviesData, setMoviesData] = useState({
    totalMoviesResults: 0,
    currentPage: page,
    totalPages: pages,
    shows: tv_shows,
  });
  const [moviesSuggestions, setMoviesSuggestions] = useState({
    totalMoviesResults: 0,
    currentPage: 0,
    totalPages: 0,
    shows: [],
  });
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [targetSearch, setTargetSearch] = useState("");
  let urlType;

  // pagination
  const handleChangePage = async (event, thisPage) => {
    isSearching
      ? (urlType = `search?q=${targetSearch}&`)
      : (urlType = `most-popular?`);

    setIsLoading(true);

    const res = await fetch(
      `https://www.episodate.com/api/${urlType}page=${thisPage}`
    );
    const newPage = await res.json();

    setIsLoading(false);

    setMoviesData({
      totalMoviesResults: newPage.total,
      currentPage: newPage.page,
      totalPages: newPage.pages,
      shows: newPage.tv_shows,
    });
  };

  // search
  const searchHandler = async (text) => {
    if (text.length < 3) {
      setIsSearching(false);
      setMoviesSuggestions({ shows: [] });

      return;
    } else {
      setIsSearching(true);
      setIsLoading(true);
      setTargetSearch(text);

      const result = await loadSearch(text);

      if (result.data) {
        setMoviesSuggestions({
          totalMoviesResults: result.data.total,
          currentPage: result.data.page,
          totalPages: result.data.pages,
          shows: result.data.tv_shows,
        });

        setIsLoading(false);
      }
    }
  };

  return (
    <MovieDataContext.Provider
      value={{
        moviesData,
        moviesSuggestions,
        targetSearch,
        isSearching,
        isLoading,
        handleChangePage,
        searchHandler,
      }}
    >
      {children}
    </MovieDataContext.Provider>
  );
};
