import {
  DetailContainer,
  Header,
  Body,
  Footer,
} from "../../styles/components/layout/stylesDetailsSection";
import {
  Public,
  PlayCircleFilledOutlined,
  PauseCircleFilledOutlined,
  LiveTvOutlined,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";

const DetailsSection = ({ tvShow }) => {
  const {
    image_path,
    image_thumbnail_path,
    name,
    rating,
    start_date,
    end_date,
    country,
    status,
    description,
  } = tvShow;

  const [ratingValue, setRatingValue] = useState(Number(rating) * 0.5);

  return (
    <DetailContainer>
      <Header>
        <img src={image_path} />
      </Header>
      <Body>
        <div className="firstChild">
          <div className="imgHolder">
            <img src={image_thumbnail_path} />
          </div>
        </div>
        <div className="secondChild">
          <div className="showTitle">
            <h1>{name}</h1>
          </div>
          <div className="showRating">
            &nbsp; <Rating name="read-only" value={ratingValue} readOnly />{" "}
            &nbsp;{Number(rating).toFixed(1)}
          </div>
          <div>
            <p>
              <PlayCircleFilledOutlined style={{ color: "#17161c" }} />
              &nbsp; lançado em: {start_date}
            </p>
            <p>
              <PauseCircleFilledOutlined style={{ color: "#17161c" }} />
              &nbsp; previsão: {end_date}
            </p>
            <p>
              <LiveTvOutlined style={{ color: "#17161c" }} />
              &nbsp; status: {status}
            </p>
            <p>
              <Public style={{ color: "#17161c" }} />
              &nbsp; país de origem: {country}
            </p>
          </div>
        </div>
      </Body>
      <Footer>
        <article>{description}</article>
      </Footer>
    </DetailContainer>
  );
};

export default DetailsSection;
