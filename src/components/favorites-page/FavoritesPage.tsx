import { FC, PropsWithChildren } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";


const FavoritesPage: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isAuth } = useAuth();

  return (isAuth ? (
    <article>
      <h2>Favorites page</h2>
      {children}
    </article>
  ) : (
    <Navigate to="/signin" />
  ));
}

export default FavoritesPage;
