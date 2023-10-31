import { FC, PropsWithChildren } from "react";
import { store } from "../../store";
import Card from "../card/Card";


const Favorites: FC<PropsWithChildren<{}>> = ({ children }) => {
  const st = store.getState().favoriteMoviesList;

  return (
    <>
      List of favorites movies' id:
      {st.favoriteMoviesList.map(movieId => <Card movie={{id: movieId, name: "name", image: "img"}} />)}
    </>
  );
}

export default Favorites;
