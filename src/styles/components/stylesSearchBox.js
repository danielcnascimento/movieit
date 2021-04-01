import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;

  position: relative;

  padding: 0.8rem 0;

  font-size: 2rem;
  font-weight: 400;
  color: var(--text);

  background: #0e0e0e;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  div span {
    color: var(--red);
  }
`;

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
