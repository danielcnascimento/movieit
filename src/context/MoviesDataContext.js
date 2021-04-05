import { createContext, useEffect, useState } from "react";
import { loadSearch } from "../services/api";

export const HomeContext = createContext({});

export const MoviesDataProvider = ({ children, releases }) => {
  const { tv_shows, page, pages } = releases;

  const initialMoviesData = {
    totalMoviesResults: null,
    currentPage: page,
    totalPages: pages,
    shows: tv_shows,
  };

  const [moviesData, setMoviesData] = useState(initialMoviesData);
  const [isSearching, setIsSearching] = useState(false);
  const [targetSearch, setTargetSearch] = useState("");
  let urlType;

  // pagination
  const handleChangePage = async (event, thisPage) => {
    isSearching
      ? (urlType = `search?q=${targetSearch}&`)
      : (urlType = `most-popular?`);

    const res = await fetch(
      `https://www.episodate.com/api/${urlType}page=${thisPage}`
    );
    const newPage = await res.json();

    setMoviesData({
      totalMoviesResults: newPage.total,
      currentPage: newPage.page,
      totalPages: newPage.pages,
      shows: newPage.tv_shows,
    });
  };

  // search
  const searchHandler = async (text) => {
    if (text.length < 2) {
      setIsSearching(false);
      setMoviesData(initialMoviesData);

      return;
    } else {
      setIsSearching(true);

      setTargetSearch(text);

      const result = await loadSearch(text);
      if (result.data) {
        setMoviesData({
          totalMoviesResults: result.data.total,
          currentPage: result.data.page,
          totalPages: result.data.pages,
          shows: result.data.tv_shows,
        });
      }
    }
  };

  return (
    <HomeContext.Provider
      value={{
        moviesData,
        isSearching,
        handleChangePage,
        searchHandler,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
