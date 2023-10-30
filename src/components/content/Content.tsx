import { FC, useState, useEffect } from "react";

import searchFilmInstance from "../../API/axios";

import { TMovie, TMovieByQuery } from "../../redux/movie/type";

import { FILM_IDS } from "../../config/globals";

import "./index.css";

interface Props {
  query: string;
}

const Content: FC<Props> = ({ query }) => {
  const [ids, setIds] = useState<string[]>(FILM_IDS);
  const [moviesById, setMoviesById] = useState<TMovie[]>([]);
  const [moviesByQuery, setMoviesByQuery] = useState<TMovieByQuery[]>([]);

  async function fetchMovieByQuery(query: string) {
    await searchFilmInstance.get(`?q=${query}`).then((res) => {
      setMoviesByQuery(res.data.description);
    });
  }

  async function fetchMovieById(id: string) {
    await searchFilmInstance.get(`?tt=${id}`).then((res) => {
      setMoviesById((prevState) => [
        ...prevState,
        {
          name: res.data.short.name,
          image: res.data.short.image,
          id: res.data.imdbId,
        },
      ]);
    });
  }

  useEffect(() => {
    if (query.length) {
      fetchMovieByQuery(query);
    } else {
      for (let i = 0; i < ids.length; i++) {
        fetchMovieById(ids[i]);
      }
    }
  }, [ids, query]);

  return (
    <article className="content">
      <ul className="content-items">
        {query.length
          ? moviesByQuery.map((movie) => (
              <li className="content-item" key={movie["#IMDB_ID"]}>
                <h3 className="item-heading">{movie["#TITLE"]}</h3>
                <img
                  className="item-poster"
                  src={movie["#IMG_POSTER"]}
                  alt="movie poster"
                  height="550px"
                />
              </li>
            ))
          : moviesById.length
          ? moviesById.map((movie) => (
              <li className="content-item" key={movie.id}>
                <h3 className="item-heading">{movie.name}</h3>
                <img
                  className="item-poster"
                  src={movie.image}
                  alt="movie poster"
                  height="550px"
                />
              </li>
            ))
          : "123"}
      </ul>
    </article>
  );
};

export default Content;
