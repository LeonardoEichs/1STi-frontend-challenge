import { Container, Row } from "./styles";

function CapitalDisplay() {
  return (
    <Container>
      <h1>Capitais</h1>
      <Row className="header">
        <div>Min</div>
        <div>Máx</div>
        <div></div>
      </Row>

      <Row>
        <div>18˚</div>
        <div>27˚</div>
        <div>Rio de Janeiro</div>
      </Row>
      <Row>
        <div>18˚</div>
        <div>27˚</div>
        <div>Rio de Janeiro</div>
      </Row>
      <Row>
        <div>18˚</div>
        <div>27˚</div>
        <div>Rio de Janeiro</div>
      </Row>
      <Row>
        <div>18˚</div>
        <div>27˚</div>
        <div>Rio de Janeiro</div>
      </Row>
      <Row>
        <div>18˚</div>
        <div>27˚</div>
        <div>Rio de Janeiro</div>
      </Row>
    </Container>
  );
}

export default CapitalDisplay;
