import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 75vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    width: 100vw;
  }
`;
