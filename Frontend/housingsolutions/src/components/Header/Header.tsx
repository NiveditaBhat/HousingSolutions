import * as React from "react";

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuBar from "../MenuBar/MenuBar";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import useMedia from "../../utils/useMedia";

const Header: React.FunctionComponent = () => {
  const [menuBarStatus, toggleSideBar] = React.useState(false);
  const isDesktop = useMedia("(min-width:64em)");

  return (
    <>
      <header className={styles.Header}>
        <ul className={styles.Header_items}>
          <li className={`${styles.Header_item} ${styles.Header_item___title} `}>
            <CompanyLogo />
          </li>
          <li className={styles.Header_item}>
            <section className={styles.Header_contact}>
              <FontAwesomeIcon icon="phone-alt" className={styles.Header_phoneIcon} />
              <span>call us - 01633 030040</span>
            </section>
          </li>
          <li className={`${styles.Header_item} ${styles.Header_item___login}`}>Login</li>
          <li className={`${styles.Header_item} ${styles.Header_item___register}`}>Register</li>
          <li
            className={`${styles.Header_item} ${styles.Header_item___menuBar}`}
            onClick={() => toggleSideBar(!menuBarStatus)}
          >
            {!menuBarStatus ? (
              <FontAwesomeIcon icon="bars" />
            ) : (
              <FontAwesomeIcon icon="window-close" className={styles.Header_closeIcon} size="lg" />
            )}
          </li>
        </ul>
        {!isDesktop && menuBarStatus && <MenuBar />}
      </header>
    </>
  );
};

export default Header;
