import * as React from "react";
import styles from "./Popup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

interface PopupProps {
  label: string;
  options: string[];
  handleToggle(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Popup: React.FunctionComponent<PopupProps> = ({ label, options, handleToggle }) => {
  return (
    <section className={styles.Popup}>
      <header className={styles.Popup_header}>
        <span className={styles.Popup_title}>{label}</span>
        <button onClick={handleToggle}>
          <FontAwesomeIcon icon="times" className={styles.Popup_closeIcon} size="2x" />
        </button>
      </header>
      <div className={styles.Popup_body}>
        <ul className={styles.Popup_list}>
          {options.map((option, i) => (
            <li className={styles.Popup_item} key={label + i}>
              {option}
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.Popup_footer}>
        <Button
          label={"Confirm your choice"}
          onClick={handleToggle}
          type={"primary"}
          extraClasses={[styles.Popup_closeButton]}
        />
      </footer>
    </section>
  );
};

export default Popup;
