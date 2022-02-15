import style from "../Menu/Menu.module.scss";

function Menu() {
  return (
    <div className={style.menu}>
      {/* <div className={style.menuBtn}>
        <span></span>
      </div> */}
      <ul className={style.menuList}>
        <li className={style.menuItem}>
          <a href="#/Home">Home</a>
        </li>
        <li className={style.menuItem}>
          <a href="#/Characters">Characters</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
