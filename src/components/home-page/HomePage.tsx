import { FC, PropsWithChildren } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";


const HomePage: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isAuth, email } =  useAuth();
  const dispatch = useDispatch();

  return (isAuth ?
    <article>
      <h2>Home page</h2>
      <button onClick={() => dispatch(removeUser())}>Sign out from {email}</button>
      {children}
    </article> : (
    <Navigate to="/signin" />
    )
  );
}

export default HomePage;
