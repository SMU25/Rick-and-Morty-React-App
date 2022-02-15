import { Link } from "react-router-dom";

import style from "../Menu/Menu.module.scss";

function Menu() {
  return (
    <div className={style.menu}>
      {/* <div className={style.menuBtn}>
        <span></span>
      </div> */}
      <ul className={style.menu__list}>
        <li className={style["menu__list-item"]}>
          <Link to="/">Home</Link>
        </li>
        <li className={style["menu__list-item"]}>
          <Link to="/Characters">Characters</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
