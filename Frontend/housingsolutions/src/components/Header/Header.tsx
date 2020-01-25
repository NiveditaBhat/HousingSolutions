import * as React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as CompanyLogo } from "../../static/svgs/companylogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = props => {
  return (
    <header className={styles.Header}>
      <ul className={styles.Header_items}>
        <li className={`${styles.Header_item} ${styles.Header_item___title} `}>
          <CompanyLogo className={styles.Header_logo} />
          <span className={styles.Header_title}>HousingSolutions </span>
        </li>
        <li className={styles.Header_item}>
          <section className={styles.Header_contact}>
            <FontAwesomeIcon icon="phone-alt" className={styles.Header_phoneIcon} />
            <span>call us - 01633 030040</span>
          </section>
        </li>
        <li className={`${styles.Header_item} ${styles.Header_item___login}`}>Login</li>
        <li className={`${styles.Header_item} ${styles.Header_item___register}`}>Register</li>
        <li className={`${styles.Header_item} ${styles.Header_item___menuBar}`}>
          <FontAwesomeIcon icon="bars" className={styles.Header_phoneIcon} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
