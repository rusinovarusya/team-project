import { FC, useState, useEffect } from "react";

import searchFilmInstance from "../../API/axios";

import { TMovie } from "../../redux/movie/type";

import './index.css'

const FILM_IDS : string[] = ['tt0111161', 'tt0068646', 'tt0468569', 'tt0071562', 'tt0108052', 'tt0167260', 'tt0110912', 'tt0050083']

const Content: FC = () => {
  const [ids, setIds] = useState<string[]>(FILM_IDS);
  const [movies, setMovies] = useState<TMovie[]>([]);
  
  useEffect(() => {
    async function fetchMovie(id: string) {
      await searchFilmInstance
        .get(`?tt=${id}`)
        .then((res) => {
          setMovies((prevState) => [...prevState, {
            name: res.data.short.name,
            image: res.data.short.image,
            description: res.data.short.description
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
          <li className="content-item">
            <h3 className="item-heading">{movie.name}</h3>
            <img className="item-poster" src={movie.image} alt="movie poster" width="300px" />
            <p className="item-summary">{movie.description}</p>
          </li>
        )) : "Не загрузилось"}
            </ul>
        </article>
    );
  }
  
  export default Content;