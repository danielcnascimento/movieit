import { useState } from "react";
import Image from "next/image";

import moment from "moment";

import {
  DetailContainer,
  DetailHeader,
  DetailMain,
  DetailFooter,
} from "../../styles/components/layout/stylesDetailsSection";

import {
  Public,
  PlayCircleFilledOutlined,
  PauseCircleFilledOutlined,
  LiveTvOutlined,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

const DetailsSection = (tvShow) => {
  const {
    image_path,
    image_thumbnail_path,
    name,
    network,
    youtube_link,
    rating_count,
    rating,
    start_date,
    end_date,
    country,
    status,
    description,
  } = tvShow;

  const [ratingValue, setRatingValue] = useState(Number(rating) * 0.5);

  moment.locale("pt-br");

  return (
    <DetailContainer>
      <DetailHeader>
        <Image
          loading="eager"
          layout="intrinsic"
          src={image_path}
          width={1300}
          height={350}
        />
      </DetailHeader>
      <DetailMain>
        <div className="firstChild">
          <div className="imgHolder">
            <img src={image_thumbnail_path} />
          </div>
        </div>
        <div className="secondChild">
          <div className="showTitle">
            <h1>
              {name} &bull;&nbsp;
              <span>{network}</span>
              {youtube_link && (
                <a
                  href={`https://www.youtube.com/watch?v=${youtube_link}`}
                  target="_blank"
                >
                  &nbsp;&bull; Assistir trailer
                </a>
              )}
            </h1>
            <strong></strong>
          </div>
          <div className="showRating">
            {rating_count > 0 ? (
              <>
                &nbsp; <Rating name="read-only" value={ratingValue} readOnly />
                &nbsp;{Number(rating).toFixed(1)}/10
              </>
            ) : (
              "Sem Avaliações :("
            )}
          </div>
          <div>
            <p>
              <PlayCircleFilledOutlined
                style={{ color: "#17161c" }}
                width={25}
                height={25}
              />
              &nbsp;lançamento:&nbsp;{`${moment(start_date).format("L")}`}&nbsp;
              &bull; {`${moment(start_date).fromNow(true)} atrás`}
            </p>
            <p>
              <PauseCircleFilledOutlined
                style={{ color: "#17161c" }}
                width={25}
                height={25}
              />
              &nbsp; previsão: {end_date ?? "Indefinido"}
            </p>
            <p>
              <LiveTvOutlined
                style={{ color: "#17161c" }}
                width={25}
                height={25}
              />
              &nbsp; status:{" "}
              {status === "Running" ? "Em lançamento" : "Finalizado"}
            </p>
            <p>
              <Public style={{ color: "#17161c" }} width={25} height={25} />
              &nbsp; país de origem: {country}
            </p>
          </div>
        </div>
      </DetailMain>
      <DetailFooter>
        <article>{description}</article>
      </DetailFooter>
    </DetailContainer>
  );
};

export default DetailsSection;
