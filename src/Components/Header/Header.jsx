import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = ({ today, options }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <p>{today.toLocaleString("ru-RU", options)}</p>
        <div>
          <p>
            <NavLink to="/">Главная</NavLink>
          </p>
          <p>
            <NavLink to="/tasks">Задачи</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
