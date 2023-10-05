import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Header = ({ today, options }) => {
  return (
    <div className={classNames(s.wrapper, s.adaptive)}>
      <div className={classNames(s.header, s.adaptive)}>
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
