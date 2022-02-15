import logo from "../../assets/img/logo.png";
import style from "../Header/Header.module.scss";
import "../Header/Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <a href="#/Home">
        <img className={style.logo} src={logo} alt="Logo" />
      </a>

      <p className={` ${style.headerAuthorName}`}>
        <a href="https://github.com/SMU25">Oleksandr Myronchuk</a>
      </p>
    </header>
  );
}

export default Header;
