import { Container, Row, MinMaxHeader } from "./styles";
import { useEffect, useState } from "react";

const capitals = [
  "Rio de Janeiro",
  "São Paulo",
  "Belo Horizonte",
  "Brasília",
  "Belém",
  "Salvador",
  "Curitiba",
  "Fortaleza",
  "Manaus",
  "Joao Pessoa",
];

const URL =
  "http://api.weatherapi.com/v1/forecast.json?key=b5e57d17623741609f8231655210910&days=1&aqi=no&alerts=no";

function CapitalDisplay() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    capitals.map((capital) => {
      fetch(`${URL}&q=${capital}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherInfo((prevState) => [...prevState, data]);
        })
        .catch((error) => setError(error));
    });
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <h1>Capitais</h1>
      <MinMaxHeader>
        <ul>
          <li>
            <Row className="header">
              <div>Min</div>
              <div>Máx</div>
              <div></div>
            </Row>
          </li>
          <li>
            <Row className="header second-header">
              <div>Min</div>
              <div>Máx</div>
              <div></div>
            </Row>
          </li>
        </ul>
      </MinMaxHeader>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {weatherInfo.map((weather, i) => (
            <li key={i}>
              <Row>
                <div>
                  {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}˚
                </div>
                <div>
                  {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}˚
                </div>
                <div>{weather.location.name}</div>
              </Row>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default CapitalDisplay;
