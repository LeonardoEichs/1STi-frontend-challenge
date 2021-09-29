import styled from "styled-components";

export const Container = styled.div`
  ul > li {
    list-style: none;
    margin-top: 1rem;
  }

  @media (min-width: 530px) {
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      width: 50%;
    }
  }
`;

export const Row = styled.div`
  color: var(--black);
  display: grid;
  grid-template-columns: 1fr 1fr 80%;
  grid-gap: 1rem;

  font-weight: 600;
`;

export const MinMaxHeader = styled.div`
  .header {
    font-weight: 200;
  }

  .second-header {
    display: none;
  }

  @media (min-width: 530px) {
    .second-header {
      display: grid;
    }
  }
`;
