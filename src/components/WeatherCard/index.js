import { Container, HorizontalLine } from "./styles";

function WeatherCard() {
  return (
    <Container>
      <h1>Niterói, RJ - Brasil</h1>
      <i class="fa fa-times"></i>
      <h2>20˚ Nublado</h2>
      <i class="fa fa-times"></i>
      <i class="fa fa-arrow-up"></i>
      <span>16˚</span>
      <i class="fa fa-arrow-down"></i>
      <span>25˚</span>
      <p>Sensação 19˚</p>
      <p>Vento 18km/h</p>
      <p>Humidade 89%</p>
      <HorizontalLine />
      <p>Terça</p>
      <p>18˚ 26˚</p>
    </Container>
  );
}

export default WeatherCard;
