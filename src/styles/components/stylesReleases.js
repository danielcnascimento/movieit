import styled from "styled-components";

export const ReleaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const ReleaseTitle = styled.p`
  font-size: 1.25rem;
  color: var(--white);
  border-left: 5px solid var(--red);
  padding-left: 0.5rem;
`;
