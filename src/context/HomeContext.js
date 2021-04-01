import { createContext, useState } from "react";

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const [page, setPage] = useState(null);

  const handleChangePage = (event, thisPage) => event && setPage(thisPage);

  return (
    <HomeContext.Provider
      value={{
        page,
        handleChangePage,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
