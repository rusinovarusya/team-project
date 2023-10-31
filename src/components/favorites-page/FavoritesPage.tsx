import { FC } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";
import Favorites from "../favorites/Favorites";


const FavoritesPage: FC = () => {
  const { isAuth } = useAuth();

  return (isAuth ? (
    <article>
      <h2>Favorites page</h2>
      <Favorites />
    </article>
  ) : (
    <Navigate to="/signin" />
  ));
}

export default FavoritesPage;
