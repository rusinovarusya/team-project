import { FC, PropsWithChildren } from "react";
import { addMovieToFavoriteMoviesList, removeMovieFromFavoriteMoviesList } from "../../store/slices/favoriteMoviesListSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useAuth } from "../../hooks/use-auth";


interface FavoriteButtonProps {
  movieId: string;
}

const FavoritesButton: FC<PropsWithChildren<FavoriteButtonProps>> = ({ movieId }) => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    dispatch(addMovieToFavoriteMoviesList({ userEmail: email, currentId: movieId }));
  }

  return (
    <>
      <input type="checkbox" name="favorites" id={movieId} onClick={handleClick} />
      <label htmlFor={movieId}>Add to favorite list</label>
    </>
  );
}

export default FavoritesButton;
