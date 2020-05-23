import * as React from "react";

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuBar from "../MenuBar/MenuBar";
import useMedia from "../../utils/useMedia";
import { menu } from "../../utils/data";
import { HashLink as Link } from "react-router-hash-link";

const Header: React.FunctionComponent = () => {
  const [isMenuBarVisible, toggleMenubar] = React.useState(false);
  const isDesktop = useMedia("(min-width:64em)");

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
          <li
            className={`${styles.Header_item} ${styles.Header_item___menuBar}`}
            onClick={() => toggleMenubar(!isMenuBarVisible)}
          >
            {!isMenuBarVisible ? (
              <FontAwesomeIcon icon="bars" />
            ) : (
              <FontAwesomeIcon icon="times" className={styles.Header_closeIcon} size="lg" />
            )}
          </li>
        </ul>
      </header>
      {!isDesktop && isMenuBarVisible && (
        <MenuBar
          onMenuClick={() => {
            toggleMenubar(!isMenuBarVisible);
          }}
        />
      )}
    </>
  );
};

export default Header;
