import { createContext, useState } from "react";
import { loadSearch } from "../services/api";

export const HomeContext = createContext({});

export const HomeProvider = ({ children, releases }) => {
  const { tv_shows, page, pages } = releases;

  const [currentPage, setCurrentPage] = useState(null);
  const [shows, setShows] = useState(tv_shows);
  const [isSearching, setIsSearching] = useState(false);

  const handleChangePage = async (event, thisPage) => {
    const res = await fetch(
      `https://www.episodate.com/api/most-popular?page=${thisPage}`
    );
    const data = await res.json();

    console.log(thisPage);

    setShows(data.tv_shows);
  };

  const makeSearch = async (text) => {
    const res = await loadSearch(text);

    if (res.data) setShows(res.data.tv_shows);
  };

  return (
    <HomeContext.Provider
      value={{
        shows,
        currentPage,
        handleChangePage,
        makeSearch,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
