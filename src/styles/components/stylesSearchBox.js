import styled from "styled-components";

//shadow overlay.

export const SuggestionOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 4;

  background: rgba(14, 14, 14, 0.5);

  transition: all 0.2s ease-in;
`;

//search container.

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

    z-index: 6;

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

    background: var(--red);

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

//suggestion container.

export const SuggestionContainer = styled.div`
  width: 100%;
  padding: 0 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 5;

  transition: all 0.5s ease-in;
  section {
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  //small devices
  @media (max-width: 1000px) {
    section {
      width: 100%;
    }
  }

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 1.5rem;
    padding: 0;

    color: var(--text);
  }

  ul li {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

    flex: 1;

    text-align: center;

    margin: 0.5rem auto;
    padding: 0.5rem 0;

    background: rgba(23, 22, 28, 0.9);

    border-radius: 4px;
    border: solid var(--gray-line);
    border-width: 2px 0;

    cursor: pointer;

    transition: all 0.2s ease-in;

    div {
      display: flex;
      padding: 0.4rem 0.8rem;

      text-align: center;
      img {
        object-fit: cover;
        object-position: 50% 50%;

        border-radius: 5px;
      }

      span {
        width: 100%;
        text-transform: uppercase;
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;

      text-align: left;

      flex: 1;

      padding: 0 1rem;
      margin: 0;

      strong {
        font-weight: 500;
      }
    }
  }

  ul li:hover {
    filter: brightness(110%);
  }

  ul ol {
    width: 100%;

    padding: 0;

    background: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
