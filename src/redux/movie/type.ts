export type TMovie = {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export type TMovieByQuery = {
  '#TITLE': string;
  '#IMG_POSTER': string;
  '#IMDB_ID': string;
}