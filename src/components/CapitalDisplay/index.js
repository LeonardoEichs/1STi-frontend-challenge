import { Container, Row, MinMaxHeader } from "./styles";

function CapitalDisplay() {
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

      <ul>
        <li>
          <Row>
            <div>18˚</div>
            <div>27˚</div>
            <div>Rio de Janeiro</div>
          </Row>
        </li>
        <li>
          <Row>
            <div>18˚</div>
            <div>27˚</div>
            <div>Rio de Janeiro</div>
          </Row>
        </li>
        <li>
          <Row>
            <div>18˚</div>
            <div>27˚</div>
            <div>Rio de Janeiro</div>
          </Row>
        </li>
        <li>
          <Row>
            <div>18˚</div>
            <div>27˚</div>
            <div>Rio de Janeiro</div>
          </Row>
        </li>
        <li>
          <Row>
            <div>18˚</div>
            <div>27˚</div>
            <div>Rio de Janeiro</div>
          </Row>
        </li>
      </ul>
    </Container>
  );
}

export default CapitalDisplay;
