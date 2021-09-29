import WeatherCard from "../WeatherCard";

import { Container, SearchBar, SearchButton, Input } from "./styles";

function Search() {
  return (
    <Container>
      <h1>Previsão do tempo</h1>
      <WeatherCard />
      <SearchBar>
        <Input
          placeholder="Insira aqui o nome da cidade"
          type="search"
          maxLength="60"
        />
        <SearchButton type="submit">
          <i class="fa fa-search"></i>
        </SearchButton>
      </SearchBar>
    </Container>
  );
}

export default Search;
