import { useState } from "react";
import Image from "next/image";

import {
  SeasonContainer,
  SeasonHeader,
  Container,
  Titles,
  EpisodesContainer,
} from "../../styles/components/layout/stylesSeasonSection";

import Collapse from "@material-ui/core/Collapse";

import moment from "moment";

const SeasonSection = (tvShow) => {
  const { episodes, name } = tvShow;

  //returns the last episode which has the last release.
  const lastEpisode = episodes[episodes.length - 1];
  //returns total seasons according to last released episode.
  const seasons = Array.from({ length: lastEpisode.season }, (v, i) => i + 1);
  //numbers of all episodes.
  const totalEpisodes = episodes.length;

  return (
    <Container>
      <strong>
        {name} &bull; {seasons.length}&nbsp;
        {seasons.length > 1 ? "Temporadas" : "Temporada"} e {totalEpisodes}
        &nbsp;
        {totalEpisodes > 1 ? "Episódios" : "Episódio"}
        &nbsp;registrados &bull; Selecione-os
      </strong>

      {seasons.map((season, index) => (
        <SeasonRow key={index} season={season} tvShow={tvShow} />
      ))}
    </Container>
  );
};

const SeasonRow = ({ season, tvShow }) => {
  const { episodes } = tvShow;

  const [isShowing, setIsShowing] = useState(false);

  // Total episodes for each season.
  let totalSeasonEpisodes = episodes.filter((eps) => season === eps.season)
    .length;

  return (
    <SeasonContainer>
      <SeasonHeader onClick={() => setIsShowing(!isShowing)}>
        <Titles>
          <h1>{season}&ordf;</h1>
          <p>
            {totalSeasonEpisodes}&nbsp;
            {totalSeasonEpisodes > 1 ? "Episódios" : "Episódio"}
          </p>
        </Titles>
      </SeasonHeader>
      {episodes
        .filter((episode) => season === episode.season)
        .map((episode, index) => (
          <Collapse in={isShowing} key={index} timeout="auto" unmountOnExit>
            <EpisodesContainer>
              <Image
                layout="fixed"
                src="/icons/movie.svg"
                width={100}
                height={100}
              />
              <div>
                <h3>{episode.name}</h3>
                <p>{moment(episode.air_date).format("ll")}</p>
              </div>
            </EpisodesContainer>
          </Collapse>
        ))}
    </SeasonContainer>
  );
};

export default SeasonSection;
