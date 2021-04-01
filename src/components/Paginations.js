import { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Pages } from "../styles/components/stylesPagination";

function Paginations() {
  const [page, setPage] = useState(null);

  const handleChangePage = (event, thisPage) => event && setPage(thisPage);

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
