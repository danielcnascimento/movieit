import {
  SeasonContainer,
  SeasonHeader,
  Container,
  Titles,
  EpisodesContainer,
} from "../../styles/components/layout/stylesSeasonSection";

import Collapse from "@material-ui/core/Collapse";
import { useState } from "react";

const SeasonSection = (props) => {
  const { tvShow } = props;

  const lastEposide = tvShow.episodes[tvShow.episodes.length - 1];
  //array of seasons numbers
  const seasons = Array.from({ length: lastEposide.season }, (v, i) => i + 1);
  //numbers of episodes
  const episodes = tvShow.episodes.length;

  return (
    <Container>
      <strong>
        {tvShow.name} &bull; {seasons.length} &nbsp;Temporadas e {episodes}
        &nbsp; Episódios registrados &bull; Selecione-os
      </strong>

      {seasons.map((season, index) => (
        <SeasonRow key={index} season={season} tvShow={tvShow} />
      ))}
    </Container>
  );
};

const SeasonRow = ({ season, tvShow }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <SeasonContainer>
      <SeasonHeader onClick={() => setIsShowing(!isShowing)}>
        <Titles>
          <h1>{season}&ordf;</h1>
          <p>
            {tvShow.episodes.filter((eps) => season === eps.season).length}
            &nbsp;Episodes
          </p>
        </Titles>
      </SeasonHeader>
      {tvShow.episodes
        .filter((eps) => season === eps.season)
        .map((eps, index) => (
          <Collapse in={isShowing} key={index} timeout="auto" unmountOnExit>
            <EpisodesContainer>
              <img src="/icons/movie.svg" />
              <div>
                <h3>{eps.name}</h3>
                <p>air-date : {eps.air_date}</p>
              </div>
            </EpisodesContainer>
          </Collapse>
        ))}
    </SeasonContainer>
  );
};

export default SeasonSection;
