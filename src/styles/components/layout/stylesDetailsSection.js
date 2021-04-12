import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;

  background: var(--dark-shade-2);
  border: solid var(--gray-line);
  border-width: 0 1px 1px 1px;
`;

export const Header = styled.header`
  position: relative;

  width: 100%;
  display: flex;

  background: var(--dark-shade-2);

  img {
    width: 100%;
    height: 21.9rem;

    object-fit: cover;
    background-size: cover;
    position: relative;

    filter: brightness(0.5);
  }
`;

export const Body = styled.body`
  width: 100%;
  height: 17rem;

  display: flex;
  justify-content: flex-start;

  background: var(--dark-shade-2);

  padding: 0 5rem;
  margin: 1rem 0;

  position: relative;

  .firstChild {
    position: relative;
    display: block;

    .imgHolder {
      position: relative;
      transform: translateY(-30%);

      img {
        width: 15.5rem;
        height: 21rem;

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
`;
