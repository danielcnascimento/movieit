import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 1080px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    padding: 1.6rem 0;
    margin: 1.6rem 0;

    border: solid var(--dark-line);
    border-width: 1px 0;
  }

  section > p {
    font-size: 1.25rem;
    color: var(--white);
    border-left: 5px solid var(--red);
    padding-left: 0.5rem;
  }

  section > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 1.6rem;
  }
`;
