import { useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Pages } from "../styles/components/stylesPagination";
import { HomeContext } from "../context/HomeContext";

function Paginations() {
  const { handleChangePage } = useContext(HomeContext);
  console.log(handleChangePage);

  return (
    <Pages>
      <Pagination
        count={1000}
        onChange={handleChangePage}
        color="secondary"
        variant="outlined"
        hidePrevButton
        hideNextButton
      />
    </Pages>
  );
}

export default Paginations;
