import * as React from "react";
import styles from "./MenuBar.module.scss";

interface IMenuBarProps {}

const MenuBar: React.FunctionComponent<IMenuBarProps> = props => {
  return (
    <section className={styles.MenuBar}>
      <ul className={styles.MenuBar_items}>
        <li className={styles.MenuBar_item}>Login</li>
        <li className={styles.MenuBar_item}>Register</li>
        <li className={styles.MenuBar_item}>Home</li>
      </ul>
    </section>
  );
};

export default MenuBar;