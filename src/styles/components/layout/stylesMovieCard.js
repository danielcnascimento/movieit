import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.8rem 0;
  flex-direction: column;

  footer {
    width: 100%;

    padding-top: 1.5rem;
    line-height: 1rem;

    display: flex;
    flex-direction: column;
    text-align: center;
  }

  footer strong {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
  }

  footer span {
    font-size: 1rem;
    color: var(--text);
    text-align: center;
    font-weight: bold;

    background: var(--dark-shade-1);

    padding: 0.5rem 1rem;
    margin-top: 1rem;

    border-radius: 20px;
    border: 1px solid;
  }

  .running {
    border-color: var(--red);

    filter: brightness(0.9);
    color: var(--red);
  }

  .ended {
    border: 1px solid;
    border-color: var(--dark-shade-0);
  }
`;

export const CardHeader = styled.div`
  width: 11.25rem;
  height: 17rem;

  background: var(--dark-shade-1);

  display: flex;
  align-items: center;

  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;

    background-size: cover;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
