import styled from "styled-components";

export const Header = styled.header`
  max-width: 100vmax;
  display: flex;
  justify-content: center;

  position: relative;

  top: 0;
  right: 0;
  left: 0;
  padding: 0.8rem 0;

  font-size: 2rem;
  font-weight: 400;
  color: #eaeaea;

  background: #0e0e0e;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  div span {
    color: #d13330;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    color: #eaeaea;
  }

  input {
    margin-top: 1rem;
    padding: 1rem 7.5rem;

    text-align: center;

    background: #eaeaea;
    border: none;
    border-radius: 60px;

    outline: none;
  }
`;
