import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary);
  background: linear-gradient(0deg, var(--secondary) 0%, var(--primary) 100%);

  color: var(--white);

  height: 100%;

  max-width: 1280px;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;

  @media (min-width: 740px) {
    margin: 0 20%;
  }
`;

export const HorizontalLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid var(--white);
  margin: 1em -2em;
`;
