import { FC, PropsWithChildren } from "react";
import FavoritesButton from "../favorite-button/FavoriteButton";

interface CardProps {
  movie: {id: string, name: string, image: string};
}

const Card: FC<PropsWithChildren<CardProps>> = ({ movie }) => {
  return (
    <div>
      <FavoritesButton movieId={movie.id} />
      <h3 className="item-heading">{movie.name}</h3>
      <img
        className="item-poster"
        src={movie.image}
        alt="movie poster"
        height="550px"
      />
    </div>
  );
}

export default Card;
