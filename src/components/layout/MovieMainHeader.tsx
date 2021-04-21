import Link from "next/link";

import { Heading } from "../../styles/components/layout/stylesHeader";

function MovieMainHeader() {
  return (
    <Heading id="movieitMainHeader">
      <Link href="/">
        <div>
          <strong>Movie</strong>
          <span>It</span>
          <img
            src="/icons/logo.svg"
            alt="MovieIt! - Catalogo de Filmes, Series e Animes Online!"
          />
        </div>
      </Link>
    </Heading>
  );
}

export default MovieMainHeader;
