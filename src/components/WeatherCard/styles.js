import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  margin: 1em -2em;
  padding: 1em 3em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: var(--gray);

  .temperature {
    font-size: 2.75rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  .arrows {
    font-size: 1.5rem;
    color: var(--primary);
  }

  .bold {
    font-weight: 500;
  }

  @media (min-width: 740px) {
    margin: 1em 0;
  }
`;

export const HorizontalLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid var(--primary);
  margin: 1em -3em;
  @media (min-width: 740px) {
    margin: 1em -1.5em;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    font-weight: 500;
  }
  i {
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0 -0.5em;
  }
`;

export const MinMaxTemp = styled.div`
  font-weight: bold;

  .min-max {
    display: inline-block;
    margin-right: 0.75rem;

    .icon {
      display: inline-block;
      height: 40px;
      margin-right: 0.25rem;
      text-align: center;
    }
  }
`;

export const WeatherMain = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: start;

  span:first-child {
    margin-right: 1.25rem;
  }
`;

export const WeatherInfo = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 0.5rem;
  font-weight: 200;
  margin-top: 1rem;
  align-items: center;
`;

export const WeekTemperature = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Day = styled.div`
  font-weight: 500;

  .day-name {
    font-size: 1.15rem;
  }

  .day-temperature {
    color: var(--primary);
    margin-top: 0.5rem;
  }
`;
