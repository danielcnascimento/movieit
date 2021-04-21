import styled from "styled-components";

export const LoadingOverlay = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  .loadingContainer {
    max-width: 30rem;
    width: 100%;
    padding: 4.5rem 1.25rem;

    display: block;

    position: relative !important;
    text-align: center;

    p {
      color: var(--text);
      margin-top: 10rem;
    }

    img {
      position: relative;

      width: 9.27rem;
      height: 6.25rem;

      object-fit: cover;
      object-position: center;
    }
  }
`;
