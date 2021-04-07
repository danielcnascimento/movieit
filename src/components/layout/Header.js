import { Heading } from "../../styles/components/layout/stylesHeader";

function Header() {
  return (
    <Heading>
      <div>
        <strong>Movie</strong>
        <span>It</span>
        <img src="/icons/logo.svg" />
      </div>
    </Heading>
  );
}

export default Header;
