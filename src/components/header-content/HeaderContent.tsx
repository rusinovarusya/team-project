import { FC } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { removeUser } from "../../store/slices/userSlice";
import './index.css'


const HeaderContent: FC = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();

  return (isAuth ? (
    <ul className="user-menu">
      <li className="user-menu__item">{email}</li>
      <li className="user-menu__item"><Link to="/favorites">Избранное</Link></li>
      <li className="user-menu__item"><Link to="/history">История</Link></li>
      <li className="user-menu__item"><Link to="/search">Поиск</Link></li>
      <li className="user-menu__item"><button onClick={() => dispatch(removeUser())}>Выход</button></li>
    </ul>
  ) : (
    <ul className="user-menu">
      <li className="user-menu__item"><Link to="/signin">Вход</Link></li>
      <li className="user-menu__item"><Link to="/signup">Регистрация</Link></li>
    </ul>
  ));
}

export default HeaderContent;
