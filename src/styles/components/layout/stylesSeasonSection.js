import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
  border-width: 0px 1px;
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
`;

export const EpisodesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;

  padding: 1rem 5rem;

  img {
    width: 6.25rem;
    height: auto;
  }

  div {
    margin-left: 0.5rem;
    border-left: 3px solid var(--red);
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
