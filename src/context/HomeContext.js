import { createContext, useState } from "react";

export const HomeContext = createContext({});

export const HomeProvider = ({ children, releases }) => {
  const { tv_shows } = releases;

  const [currentPage, setCurrentPage] = useState(null);
  const [shows, setShows] = useState(tv_shows);

  const handleChangePage = (event, thisPage) =>
    event && setCurrentPage(thisPage);

  return (
    <HomeContext.Provider
      value={{
        shows,
        currentPage,
        handleChangePage,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
