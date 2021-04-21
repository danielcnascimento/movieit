import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  ChangeEvent,
} from "react";
import { loadSearch } from "../services/api";
import { AxiosResponse } from "axios";

interface MovieDataContextData {
  moviesData: GetMoviesDataType;
  moviesSuggestions: GetMoviesDataType;
  targetSearch: string;
  isSearching: boolean;
  isLoading: boolean;
  handleChangePage: (event: ChangeEvent, thisPage: number) => void;
  searchHandler: (text: string) => {};
}

export const MovieDataContext = createContext({} as MovieDataContextData);

interface MoviesDataProviderProps {
  children: ReactNode;
  releases: MovieMainProps;
}

export const MoviesDataProvider = ({
  children,
  releases,
}: MoviesDataProviderProps) => {
  const { total, tv_shows, page, pages } = releases;

  const [moviesData, setMoviesData] = useState<GetMoviesDataType>({
    total: total ?? 0,
    page: page ?? 0,
    pages: pages ?? 0,
    tv_shows: tv_shows ?? [],
  });
  const [moviesSuggestions, setMoviesSuggestions] = useState<GetMoviesDataType>(
    {
      total: 0,
      page: 0,
      pages: 0,
      tv_shows: [],
    }
  );
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [targetSearch, setTargetSearch] = useState("");
  let urlType;

  useEffect(() => {
    if (releases.body) {
      setIsSearching(true);
    }
    setMoviesData({
      total: total,
      page: page,
      pages: pages,
      tv_shows: tv_shows,
    });
  }, [releases]);

  // Pagination handler.
  const handleChangePage = async (event: ChangeEvent, thisPage: number) => {
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
      total: newPage.total,
      page: newPage.page,
      pages: newPage.pages,
      tv_shows: newPage.tv_shows,
    });
  };

  // Search Hander.
  const searchHandler = async (text: string) => {
    if (text.length < 3) {
      setIsSearching(false);
      setMoviesSuggestions({ ...moviesSuggestions, tv_shows: [] });

      return;
    } else {
      setIsSearching(true);
      setIsLoading(true);
      setTargetSearch(text);

      const result: AxiosResponse = await loadSearch(text);
      const suggestionsResult: GetMoviesDataType = result?.data;

      if (suggestionsResult) {
        setMoviesSuggestions({
          total: suggestionsResult.total,
          page: suggestionsResult.page,
          pages: suggestionsResult.pages,
          tv_shows: suggestionsResult.tv_shows,
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
