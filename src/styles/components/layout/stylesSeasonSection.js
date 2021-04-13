import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  margin-top: 1rem;

  border: solid var(--gray-line);
  border-width: 0 1px 1px 1px;

  background: var(--dark-shade-2);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  strong {
    color: var(--text);
    font-weight: 500;
    padding: 1rem 0;
  }
`;

export const SeasonContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;

  flex-direction: column;
`;

export const SeasonHeader = styled.div`
  width: inherit;
  height: 4.4rem;

  background-color: var(--dark-shade-0);

  display: inherit;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  cursor: row-resize;
`;

export const Titles = styled.div`
  width: 20%;
  height: auto;

  background: var(--red);

  flex: 1;

  display: inherit;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  border: solid var(--white);
  border-width: 0 1px;
  box-shadow: 0 0 20 rgb(0, 0, 0);

  h1 {
    color: var(--text);
    font-size: 2rem;

    margin: 0;
    padding: 0;
  }

  p {
    color: var(--text);

    margin: 0;
    padding: 0;
  }

  @media (max-width: 1000px) {
    width: 25%;
  }

  @media (max-width: 370px) {
    width: 50%;
  }
`;

export const EpisodesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  text-align: left;

  padding: 1rem 5rem;

  position: relative;
  img {
    width: 6.25rem;
    height: auto;

    object-fit: cover;
  }

  div:last-child {
    margin-left: 0.5rem;
    border: solid var(--red);

    border-width: 0 0 0 3px;
  }
  div h3 {
    color: var(--text);

    margin: 0.4rem;
    padding: 0;
  }
  div p {
    color: var(--text);

    margin: 0.4rem;
    padding: 0;
  }
`;
