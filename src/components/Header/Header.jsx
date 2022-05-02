import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import style from "../Header/Header.module.scss";
import "../Header/Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img className={style.logo} src={logo} alt="Logo" />
      </Link>
      <author className={` ${style.header__author}`}>
        <a href="https://github.com/SMU25">Oleksandr Myronchuk</a>
      </author>
    </header>
  );
}

export default Header;
