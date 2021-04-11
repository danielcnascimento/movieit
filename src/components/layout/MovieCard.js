import { SectionContainer } from "../../styles/components/layout/stylesMovieCard";

import {
  PlayCircleFilledOutlined,
  PauseCircleFilledOutlined,
} from "@material-ui/icons";

import moment from "moment";

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
                &nbsp;
                {moment(show.start_date).format("L")}
              </p>
              <p>
                <PauseCircleFilledOutlined />
                &nbsp;
                {show.end_date ? moment(show.end_date).format("L") : "-/-/-"}
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
