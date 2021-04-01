import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.8rem 0;
  flex-direction: column;

  footer {
    padding-top: 1.5rem;
    line-height: 0.5rem;
  }

  footer strong {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
  }

  footer p {
    font-size: 1rem;
    color: var(--text);
  }
`;

export const CardHeader = styled.div`
  width: 11.25rem;
  height: 14.34rem;

  background: var(--dark-shade-1);

  display: flex;
  align-items: center;

  border-radius: 10px;

  img {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
