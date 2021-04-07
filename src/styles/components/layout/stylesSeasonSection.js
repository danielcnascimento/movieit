import styled from "styled-components";

export const Container = styled.div`
  width: 1080px;
  height: auto;

  margin-top: 1rem;
  margin-bottom: 1rem;
  border: solid var(--gray-line);
  border-width: 0 1px 1px 1px;

  background-color: var(--dark-shade-2);

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h5 {
    color: white;
  }
`;

export const SeasonContainer = styled.div`
  width: 1080px;
  height: 70px;

  background-color: var(--dark-shade-0);

  display: inherit;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Titles = styled.div`
  width: 234px;
  height: 70px;

  background-color: var(--red);

  display: inherit;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 2px;

  h1 {
    color: white;
    font-size: 2rem;

    margin: 0;
    padding: 0;
  }

  p {
    color: white;

    margin: 0;
    padding: 0;
  }
`;

export const EposideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;

  margin: 1rem;

  img {
    width: 6.25rem;
    height: auto;
  }

  div {
    margin-left: 0.5rem;
  }
  h3 {
    color: white;

    margin: 0;
    padding: 0;
  }
  p {
    color: white;

    margin: 0;
    padding: 0;
  }
`;
