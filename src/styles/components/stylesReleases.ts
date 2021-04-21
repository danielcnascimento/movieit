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

  // Laptops
  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  // Small generic device
  @media (max-width: 780px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  // Extra small devices
  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

export const ReleaseTitle = styled.p`
  font-size: 1.25rem;
  color: var(--white);
  border-left: 5px solid var(--red);

  padding-left: 0.5rem;
`;
