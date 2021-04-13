import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 0.8rem 0;

  font-size: 2rem;
  font-weight: 400;
  color: var(--text);

  background: #0e0e0e;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    cursor: pointer;
  }

  div span {
    color: var(--red);
  }

  div img {
    margin-left: 0.9rem;
  }
`;
