import { SectionContainer } from "../../styles/components/layout/stylesMovieCard";

import {
  PlayCircleFilledOutlined,
  PauseCircleFilledOutlined,
} from "@material-ui/icons";

import moment from "moment";

const MovieCard = ({
  name,
  country,
  start_date,
  end_date,
  image_thumbnail_path,
}) => {
  return (
    <SectionContainer>
      <div>
        <div className="shadowOverlay">
          <div className="descriptionPost">
            <div className="postHeader">
              <strong>{name}</strong>
              <span>{country}</span>
            </div>
            <div className="postFooter">
              <p>
                <PlayCircleFilledOutlined />
                &nbsp;
                {start_date ? moment(start_date).format("L") : "Indefinido!"}
              </p>
              <p>
                <PauseCircleFilledOutlined />
                &nbsp;
                {end_date ? moment(end_date).format("L") : "-/-/-"}
              </p>
            </div>
          </div>
          <img
            src={image_thumbnail_path ?? "/icons/movie.svg"}
            alt={`${name}`}
            width={223}
            height={360}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default MovieCard;
