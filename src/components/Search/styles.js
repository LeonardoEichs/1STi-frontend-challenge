import styled from "styled-components";

export const Container = styled.div`
  & > h1 {
    margin-bottom: 2rem;
  }
  @media (min-width: 740px) {
    & > h1 {
      text-align: center;
      font-size: 2.5rem;
    }
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  background: var(--white);
  width: 100%;
  height: 2.5em;
  padding: 1em;
  border: 1px solid var(--gray);
  border-right: none;
  font-size: 1rem;
  font-weight: 300;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  background: var(--white);
  border: 1px solid var(--gray);
  border-left: none;
  text-align: center;
  color: var(--gray);
  cursor: pointer;
  font-size: 20px;

  i {
    margin-right: 1.25rem;
  }
`;
