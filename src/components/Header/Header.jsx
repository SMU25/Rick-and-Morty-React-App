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

      <p className={` ${style.headerAuthorName}`}>
        <a href="https://github.com/SMU25">Oleksandr Myronchuk</a>
      </p>
    </header>
  );
}

export default Header;
