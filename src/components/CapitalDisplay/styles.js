import styled from "styled-components";

export const Container = styled.div``;

export const Row = styled.div`
  color: var(--black);
  display: grid;
  grid-template-columns: 1fr 1fr 80%;

  font-weight: 600;

  &.header {
    font-weight: 200;
  }
`;
