import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    color: var(--white);
  }

  .searchFAB {
    position: fixed;
    bottom: 2rem;
    right: 1rem;

    z-index: 5;

    svg {
      width: 20px;
      height: auto;
    }
  }

  @media (max-width: 320px) {
    .searchFAB {
      bottom: 5rem;
    }
  }
`;

export const SearchBoxContainer = styled.div`
  position: absolute;
  z-index: 5;

  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 54, 56, 0.65);
  box-shadow: 0px 3px 10px rgb(12 13 13 / 44%);

  transition: all 0.5s ease;

  svg {
    width: 2rem;
    height: auto;

    color: var(--white);
    font-size: 2.5rem;
  }

  input {
    width: 35%;

    position: relative;
    z-index: 5;

    padding: 2.5rem 0.1rem;

    font-size: 1.2rem;
    text-align: left;
    color: var(--white);

    background: transparent;
    border: none;

    outline: none;
  }
  @media (max-width: 520px) {
    align-items: center;
    justify-content: flex-start;

    input {
      width: 60%;

      padding: 2rem 0.2rem;

      text-align: left;

      background: transparent;
      border: none;

      outline: none;
    }
  }
`;
