import styled from "styled-components";

export const ReleaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  // Generic PC
  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  // Small laptops
  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  // Ipad
  @media (max-width: 780px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  // Moto G4
  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
`;

export const ReleaseTitle = styled.p`
  font-size: 1.25rem;
  color: var(--white);
  border-left: 5px solid var(--red);
  padding-left: 0.5rem;
`;
