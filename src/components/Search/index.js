import WeatherCard from "../WeatherCard";

import { Container, SearchBar, SearchButton, Input } from "./styles";

import { useState } from "react";

const URL =
  "http://api.weatherapi.com/v1/forecast.json?key=b5e57d17623741609f8231655210910&days=5&aqi=no&alerts=no";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cardVisible, setCardVisible] = useState(true);

  const searchButton = (e, searchTerm) => {
    e.preventDefault();
    if (!!searchTerm)
      fetch(`${URL}&q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherInfo(data);
          setCardVisible(true);
        })
        .catch((err) => {
          setWeatherInfo(null);
          setCardVisible(false);
        });
    else {
      setWeatherInfo(null);
      setCardVisible(false);
    }
  };

  return (
    <Container>
      <h1>Previsão do tempo</h1>
      {weatherInfo != null && (
        <WeatherCard
          weatherInfo={weatherInfo}
          cardVisible={cardVisible}
          setCardVisible={setCardVisible}
        />
      )}
      <SearchBar>
        <Input
          placeholder="Insira aqui o nome da cidade"
          value={searchValue}
          type="search"
          maxLength="60"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchButton
          type="submit"
          onClick={(e) => searchButton(e, searchValue)}
        >
          <i className="fa fa-search"></i>
        </SearchButton>
      </SearchBar>
    </Container>
  );
}

export default Search;
