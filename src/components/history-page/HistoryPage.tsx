import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


const HistoryPage: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isAuth } = useAuth();

  return (isAuth ? (
    <article>
      <h2>History page</h2>
      {children}
    </article>
  ) : (
    <Navigate to="/signin" />
  ));
}

export default HistoryPage;
