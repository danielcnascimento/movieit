import { useContext } from "react";

import Pagination from "@material-ui/lab/Pagination";

import { Pages } from "../../styles/components/stylesPagination";
import { MovieDataContext } from "../../context/MoviesDataContext";
import { Link as Scroll } from "react-scroll";

function Paginations() {
  const { handleChangePage, moviesData, isLoading } = useContext(
    MovieDataContext
  );

  return (
    <Scroll to="movieitMainHeader">
      <Pages>
        <Pagination
          count={moviesData.pages}
          onChange={handleChangePage}
          color="secondary"
          disabled={isLoading}
          hidePrevButton
          hideNextButton
        />
      </Pages>
    </Scroll>
  );
}

export default Paginations;
