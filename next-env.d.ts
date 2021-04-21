/// <reference types="next" />
/// <reference types="next/types/global" />

type GetMoviesDataType = {
  total?: number;
  page: number;
  pages: number;
  tv_shows: TvShowTypes[] | [];
};

type TvShowTypes = {
  id: number;
  permalink: string | undefined;
  image_path: string;
  image_thumbnail_path: string;
  name: string;
  network: string;
  youtube_link: string;
  rating_count: number;
  rating: number;
  start_date: Date;
  end_date: Date;
  country: string;
  status: string;
  description: string;
  episodes: [
    {
      season: number;
      episode: number;
      name: string;
      air_date: Date;
    }
  ];
};

type MovieMainProps = GetMoviesDataType & {
  title: string;
  body?: string | string[] | undefined;
};
