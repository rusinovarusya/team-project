import { FC, PropsWithChildren } from "react";
import { store } from "../../store";


const Favorites: FC<PropsWithChildren<{}>> = ({ children }) => {
  const st = store.getState().favoriteMoviesList;

  return (
    <>
      List of favorites movies' id:
      {st.favoriteMoviesList.map(movieId => <div>{movieId}</div>)}
    </>
  );
}

export default Favorites;
