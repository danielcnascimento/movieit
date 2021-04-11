import {
  SeasonContainer,
  SeasonHeader,
  Container,
  Titles,
  EpisodesContainer,
} from "../../styles/components/layout/stylesSeasonSection";

import Collapse from "@material-ui/core/Collapse";

import { useState } from "react";

import moment from "moment";

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
        {tvShow.name} &bull; {seasons.length}&nbsp;
        {seasons.length > 1 ? "Temporadas" : "Temporada"} e {episodes}&nbsp;
        {episodes > 1 ? "Episódios" : "Episódio"}
        &nbsp;registrados &bull; Selecione-os
      </strong>

      {seasons.map((season, index) => (
        <SeasonRow key={index} season={season} tvShow={tvShow} />
      ))}
    </Container>
  );
};

const SeasonRow = ({ season, tvShow }) => {
  const [isShowing, setIsShowing] = useState(false);

  let episodes = tvShow.episodes.filter((eps) => season === eps.season).length;

  return (
    <SeasonContainer>
      <SeasonHeader onClick={() => setIsShowing(!isShowing)}>
        <Titles>
          <h1>{season}&ordf;</h1>
          <p>
            {episodes}&nbsp;{episodes > 1 ? "Episódios" : "Episódio"}
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
                <p>{moment(eps.air_date).format("ll")}</p>
              </div>
            </EpisodesContainer>
          </Collapse>
        ))}
    </SeasonContainer>
  );
};

export default SeasonSection;
