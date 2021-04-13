import Link from "next/link";

import { Heading } from "../../styles/components/layout/stylesHeader";

function Header() {
  return (
    <Heading id="movieitMainHeader">
      <Link href="/">
        <div>
          <strong>Movie</strong>
          <span>It</span>
          <img src="/icons/logo.svg" />
        </div>
      </Link>
    </Heading>
  );
}

export default Header;
