import { useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Pages } from "../styles/components/stylesPagination";
import { HomeContext } from "../context/MoviesDataContext";

function Paginations() {
  const { handleChangePage, moviesData, isLoading } = useContext(HomeContext);

  return (
    <Pages>
      <Pagination
        count={moviesData.totalPages}
        onChange={handleChangePage}
        color="secondary"
        disabled={isLoading}
        hidePrevButton
        hideNextButton
      />
    </Pages>
  );
}

export default Paginations;
