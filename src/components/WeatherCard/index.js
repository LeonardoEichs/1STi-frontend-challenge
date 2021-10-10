import {
  Container,
  HorizontalLine,
  CloseButton,
  CardHeader,
  MinMaxTemp,
  WeatherInfo,
  WeekTemperature,
  Day,
  WeatherMain,
} from "./styles";

import { useState, useEffect } from "react";

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function WeatherCard({ weatherInfo, cardVisible, setCardVisible }) {
  return (
    <Container style={{ display: cardVisible ? "block" : "none" }}>
      <CardHeader>
        <h1>
          {weatherInfo.location.name} - {weatherInfo.location.region}
        </h1>
        <CloseButton onClick={() => setCardVisible(!cardVisible)}>
          <i class="fa fa-times"></i>
        </CloseButton>
      </CardHeader>
      <WeatherMain>
        <h2 className="temperature">
          <span>{Math.round(weatherInfo.current.temp_c)}˚C</span>{" "}
          {weatherInfo.current.condition.text}
        </h2>
      </WeatherMain>
      <WeatherInfo>
        <MinMaxTemp>
          <div className="min-max">
            <span className="icon arrows">&#8595;</span>
            <span>
              {Math.round(weatherInfo.forecast.forecastday[0].day.mintemp_c)}˚
            </span>
          </div>
          <div className="min-max">
            <span className="icon arrows">&#8593;</span>
            <span>
              {Math.round(weatherInfo.forecast.forecastday[0].day.maxtemp_c)}˚
            </span>
          </div>
        </MinMaxTemp>
        <p>
          Sensação{" "}
          <span className="bold">
            {Math.round(weatherInfo.current.feelslike_c)}˚
          </span>
        </p>
        <p>
          Vento <span className="bold">{weatherInfo.current.wind_kph}km/h</span>
        </p>
        <p>
          Humidade <span className="bold">{weatherInfo.current.humidity}%</span>
        </p>
      </WeatherInfo>

      <HorizontalLine />
      <WeekTemperature>
        {weatherInfo.forecast.forecastday.map((dayOfWeek, ind) => (
          <Day key={ind}>
            <p className="day-name">
              {weekday[new Date(dayOfWeek.date).getUTCDay()]}
            </p>
            <p className="day-temperature">
              {Math.round(dayOfWeek.day.mintemp_c)}˚{" "}
              {Math.round(dayOfWeek.day.maxtemp_c)}˚
            </p>
          </Day>
        ))}
      </WeekTemperature>
    </Container>
  );
}

export default WeatherCard;
