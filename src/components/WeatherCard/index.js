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

function WeatherCard() {
  return (
    <Container>
      <CardHeader>
        <h1>Niterói, RJ - Brasil</h1>
        <CloseButton>
          <i class="fa fa-times"></i>
        </CloseButton>
      </CardHeader>
      <WeatherMain>
        <h2 className="temperature">
          <span>20˚C</span> Nublado
        </h2>
      </WeatherMain>
      <WeatherInfo>
        <MinMaxTemp>
          <div className="min-max">
            <span className="icon arrows">&#8595;</span>
            <span>16˚</span>
          </div>
          <div className="min-max">
            <span className="icon arrows">&#8593;</span>
            <span>25˚</span>
          </div>
        </MinMaxTemp>
        <p>
          Sensação <span className="bold">19˚</span>
        </p>
        <p>
          Vento <span className="bold">18km/h</span>
        </p>
        <p>
          Humidade <span className="bold">89%</span>
        </p>
      </WeatherInfo>

      <HorizontalLine />
      <WeekTemperature>
        <Day>
          <p className="day-name">Terça</p>
          <p className="day-temperature">18˚ 26˚</p>
        </Day>
        <Day>
          <p className="day-name">Terça</p>
          <p className="day-temperature">18˚ 26˚</p>
        </Day>
        <Day>
          <p className="day-name">Terça</p>
          <p className="day-temperature">18˚ 26˚</p>
        </Day>
        <Day>
          <p className="day-name">Terça</p>
          <p className="day-temperature">18˚ 26˚</p>
        </Day>
      </WeekTemperature>
    </Container>
  );
}

export default WeatherCard;
