import { createContext, useState, useEffect } from "react";
import { loadSearch } from "../services/api";

export const MovieDataContext = createContext({});

export const MoviesDataProvider = ({ children, releases }) => {
  const { total, tv_shows, page, pages } = releases;

  const [moviesData, setMoviesData] = useState({
    totalMoviesResults: total,
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

  useEffect(() => {
    if (releases.body) {
      setIsSearching(true);
    }
    setMoviesData({
      totalMoviesResults: total,
      currentPage: page,
      totalPages: pages,
      shows: tv_shows,
    });
  }, [releases]);

  // Pagination handler.
  const handleChangePage = async (event, thisPage) => {
    //When on Search (page), changes paginations type.
    isSearching
      ? (urlType = `search?q=${releases.body}&`)
      : (urlType = `most-popular?`);

    //Returns new results when selecting pages.
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

  // Search Hander.
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
        setIsSearching(false);
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
