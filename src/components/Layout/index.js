import Search from "../Search";
import CapitalDisplay from "../CapitalDisplay";

import { Container, HorizontalLine } from "./styles";

function Layout() {
  return (
    <Container>
      <Search />
      <HorizontalLine />
      <CapitalDisplay />
    </Container>
  );
}

export default Layout;
