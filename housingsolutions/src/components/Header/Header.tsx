import * as React from "react";
import styles from "./Header.module.scss";
import { menu } from "../../utils/data";
import { HashLink as Link } from "react-router-hash-link";
import MenuBarToggler from "../MenuBarToggler/MenuBarToggler";

const Header: React.FunctionComponent = () => {
  return (
    <>
      <header className={styles.Header}>
        <ul className={styles.Header_items}>
          <li className={`${styles.Header_item} ${styles.Header_item___title} `}>
            <h1 className={styles.Header_title}>
              <span>HousingSolutions</span>
            </h1>
          </li>
          {menu.map(menuItem => (
            <li key={menuItem.name} className={styles.Header_item}>
              <Link to={menuItem.anchorTo}>{menuItem.name}</Link>
            </li>
          ))}
          <li className={`${styles.Header_item} ${styles.Header_item___menuBar}`}>
            <MenuBarToggler />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
