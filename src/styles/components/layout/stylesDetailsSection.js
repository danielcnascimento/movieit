import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;

  background: var(--dark-shade-2);
  border: solid var(--gray-line);
  border-width: 0 1px 1px 1px;

  @media (max-width: 1000px) {
    background: var(--dark-shade-0);
  }
`;

export const Header = styled.header`
  position: relative;

  width: 100%;
  height: 21.9rem;

  display: flex;

  background: var(--dark-shade-2);

  img {
    width: 100%;
    height: auto;

    object-fit: cover;
    object-position: 50% 95%;

    position: relative;

    filter: brightness(0.5);
  }

  @media (max-width: 430px) {
    img {
      filter: initial;
    }
  }
`;

export const Body = styled.body`
  width: 100%;
  height: auto;

  display: flex;

  justify-content: flex-start;
  align-items: stretch;

  background: var(--dark-shade-2);

  padding: 0 5rem;
  margin: 1rem 0;

  position: relative;

  .firstChild {
    position: relative;

    .imgHolder {
      position: relative;
      margin: 0 auto;

      img {
        width: 15.5rem;
        height: auto;

        margin-top: -50%;

        position: relative;

        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

        border-radius: 10px;
      }
    }
  }

  .secondChild {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    flex-direction: column;

    position: relative;

    padding: 0 1.25rem;

    font-size: 1rem;
    color: var(--text);
    line-height: 0.7rem;

    .showTitle {
      font-weight: 500;
      line-height: 1rem;
      text-align: start;

      span {
        color: var(--red);
        text-transform: uppercase;
      }

      a {
        cursor: alias;
      }
    }

    .showRating {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;

      border: 1px dashed var(--red);
      border-radius: 5px;
      background: var(--dark-shade-1);

      font-size: 1.2rem;
      text-align: center;
    }

    div p {
      display: flex;
      align-items: center;
      font-weight: 300;
    }
  }
  //Small sizes
  @media (max-width: 1000px) {
    padding: initial;
    margin: initial;

    flex-direction: column;
    justify-content: center;

    background: var(--dark-shade-0);

    .firstChild {
      .imgHolder {
        margin-top: 20%;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: auto;
          height: auto;

          object-fit: cover;
          object-position: 50% 20%;

          border-radius: 50px 0 50px 0;

          border: 5px solid var(--dark-shade-0);
        }
      }
    }

    .secondChild {
      line-height: 1rem;
    }

    div p {
      display: flex;
      align-items: left;
      font-weight: 300;
    }
  }

  @media (max-width: 430px) {
    .firstChild {
      .imgHolder {
        img {
          width: 11rem;
          height: 11rem;

          border-radius: 100%;
        }
      }
    }

    .secondChild {
      div p {
        line-height: 1.5rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 1rem 1.5rem;

  border: solid var(--gray-line);
  border-width: 1px 0 0 0;

  font-size: 1rem;
  font-weight: 300;
  color: var(--text);
  text-align: justify;
  line-height: 1.5rem;

  @media (max-width: 1000px) {
    border: none;
    border-width: none;
  }
`;
