import styled from "styled-components";

export const SectionContainer = styled.section`
  > div {
    position: relative;
    display: block;

    color: var(--text);
  }
  .shadowOverlay:hover {
    position: relative;

    cursor: pointer;
    .descriptionPost {
      display: initial;

      transition: 300ms;
    }

    img {
      filter: brightness(0.6);

      border-radius: 5px;
      border: 1px solid var(--red);

      transition: 230ms;
    }
  }

  .descriptionPost {
    display: none;

    .postHeader {
      position: absolute;
      top: 5%;
      left: 10px;

      z-index: 3;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      flex-direction: column;

      span {
        padding: 0.5rem;
        margin-top: 0.5rem;

        border: 1px solid var(--red);
        background: var(--dark-shade-1);
      }
    }

    .postFooter {
      position: absolute;
      bottom: 0;
      left: 10px;

      padding-bottom: 1rem;

      z-index: 3;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      flex-direction: column;

      p {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 0.5rem;
        line-height: 2rem;
      }
    }
  }
`;
