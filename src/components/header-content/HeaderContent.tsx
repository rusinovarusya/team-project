import { FC } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { removeUser } from "../../store/slices/userSlice";


const HeaderContent: FC = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();

  return (isAuth ? (
    <ul>
      <li>{email}</li>
      <li><Link to="/favorites">Избранное</Link></li>
      <li><Link to="/history">История</Link></li>
      <li><Link to="/search">Поиск</Link></li>
      <li><button onClick={() => dispatch(removeUser())}>Выход</button></li>
    </ul>
  ) : (
    <ul>
      <li><Link to="/signin">Вход</Link></li>
      <li><Link to="/signup">Регистрация</Link></li>
    </ul>
  ));
}

export default HeaderContent;
