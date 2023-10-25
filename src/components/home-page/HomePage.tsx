import { FC, PropsWithChildren } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";


const HomePage: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isAuth } =  useAuth();

  return (isAuth ?
    <article>
      There is a description...
      {children}
    </article> : (
    <Navigate to="/signin" />
    )
  );
}

export default HomePage;
