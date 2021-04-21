import { Container } from "../styles/pages/stylesHome";

import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../styles/theme";
import { MoviesDataProvider } from "../context/MoviesDataContext";

import SearchBox from "./screen/SearchBox";
import Releases from "./screen/Releases";
import Paginations from "./screen/Paginations";

function MovieMain(props: MovieMainProps) {
  return (
    <>
      <MoviesDataProvider releases={props}>
        <ThemeProvider theme={theme}>
          <SearchBox />
          <Container>
            <section>
              <Releases title={props.title} />
            </section>
            <div>
              <Paginations />
            </div>
          </Container>
        </ThemeProvider>
      </MoviesDataProvider>
    </>
  );
}

export default MovieMain;
