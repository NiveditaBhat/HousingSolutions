import * as React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as CompanyLogo } from "../../static/svgs/companylogo.svg";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = props => {
  return (
    <header className={styles.Header}>
      <ul className={styles.Header_items}>
        <li className={`${styles.Header_item} ${styles.Header_item___title} `}>
          <CompanyLogo className={styles.Header_logo} />
          <span className={styles.Header_title}>HousingSolutions </span>
        </li>
        <li className={styles.Header_item}>Contact</li>
        <li className={styles.Header_item}>Login</li>
        <li className={styles.Header_item}>Register</li>
      </ul>
    </header>
  );
};

export default Header;
