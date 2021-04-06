import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    color: var(--text);
  }

  input {
    margin-top: 1rem;
    padding: 1rem 7.5rem;

    text-align: center;

    background: var(--text);
    border: none;
    border-radius: 60px;

    outline: none;
  }
`;
