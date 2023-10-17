import { FC, PropsWithChildren } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";


const HomePage: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isAuth } =  useAuth();

  console.log("is auth? " + isAuth);

  return (isAuth ?
    <article>
      <h2>Home page</h2>
      {children}
    </article> : (
    <Navigate to="/signin" />
    )
  );
}

export default HomePage;
