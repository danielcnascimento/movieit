import { SectionContainer } from "../../styles/components/layout/stylesMovieCard";

import {
  PlayCircleFilledOutlined,
  PauseCircleFilledOutlined,
} from "@material-ui/icons";

const MovieCard = ({ show }) => {
  return (
    <SectionContainer>
      <div>
        <div className="shadowOverlay">
          <div className="descriptionPost">
            <div className="postHeader">
              <strong>{show.name}</strong>
              <span>{show.country}</span>
            </div>
            <div className="postFooter">
              <p>
                <PlayCircleFilledOutlined />
                {show.start_date}
              </p>
              <p>
                <PauseCircleFilledOutlined /> {show.end_date ?? "-/-/-"}
              </p>
            </div>
          </div>
          <img
            src={show.image_thumbnail_path ?? "/icons/movie.svg"}
            alt={`${show.name}`}
            width={223}
            height={360}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default MovieCard;