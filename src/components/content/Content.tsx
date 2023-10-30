import { FC, useState, useEffect } from "react";

import searchFilmInstance from "../../API/axios";

import { TMovie } from "../../redux/movie/type";

import { FILM_IDS } from "../../config/globals";

import './index.css'

const Content: FC = () => {
  const [ids, setIds] = useState<string[]>(FILM_IDS);
  const [movies, setMovies] = useState<TMovie[]>([]);
  
  useEffect(() => {
    async function fetchMovie(id: string) {
      await searchFilmInstance
        .get(`?tt=${id}`)
        .then((res) => {
          console.log(res.data)
          setMovies((prevState) => [...prevState, {
            name: res.data.short.name,
            image: res.data.short.image,
            description: res.data.short.description,
            id: res.data.imdbId,
          }])
        })
    }

    for (let i = 0; i < ids.length; i++) {
      fetchMovie(ids[i]);
    }
  }, [ids])

  return (
    <article className="content">
      <ul className="content-items">
        {movies ? movies.map((movie) => (
          <li className="content-item" key={movie.id}>
            <h3 className="item-heading">{movie.name}</h3>
            <img className="item-poster" src={movie.image} alt="movie poster" width="400px" />
            <p className="item-summary">{movie.description}</p>
          </li>
        )) : "Не загрузилось"}
            </ul>
        </article>
    );
  }
  
  export default Content;