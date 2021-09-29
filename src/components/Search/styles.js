import styled from "styled-components";

export const Container = styled.div``;

export const SearchBar = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  background: var(--white);
  width: 100%;
  height: 3em;
  padding: 1em;
  border: 1px solid var(--gray);
  border-right: none;

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
`;
