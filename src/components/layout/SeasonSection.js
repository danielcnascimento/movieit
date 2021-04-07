import React from "react";
import {
  SeasonContainer,
  Container,
  Titles,
  EposideContainer,
} from "../../styles/components/layout/stylesSeasonSection";

const SeasonSection = ({ eposides }) => {
  return (
    <Container>
      <h5> Seasons and Eposide</h5>

      <SeasonContainer>
        <Titles>
          <h1>1</h1>
          <p> 7 eposides</p>
        </Titles>
      </SeasonContainer>

      <EposideContainer>
        <img src="/icons/movie.svg" />
        <div>
          <h3>Pilot</h3>
          <p>air-date :2014-10-08</p>
        </div>
      </EposideContainer>
    </Container>
  );
};

export default SeasonSection;
