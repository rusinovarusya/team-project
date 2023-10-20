import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


const SearchPage: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isAuth } = useAuth();

  return (isAuth ? (
    <article>
      <h2>Search page</h2>
      {children}
    </article>
  ) : (
    <Navigate to="/signin" />
  ));
}

export default SearchPage;
