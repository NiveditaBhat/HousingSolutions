import * as React from "react";
import styles from "./MenuBar.module.scss";
import { HashLink as Link } from "react-router-hash-link";
import { menu } from "../../utils/data";

interface MenuBarProps {
  onMenuClick: () => void;
}

const MenuBar: React.FunctionComponent<MenuBarProps> = ({ onMenuClick }) => {
  return (
    <section className={styles.MenuBar}>
      <ul className={styles.MenuBar_items}>
        {menu.map(menuItem => (
          <li key={menuItem.name} className={styles.MenuBar_item} onClick={onMenuClick}>
            <Link to={menuItem.anchorTo}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuBar;
