import * as React from "react";
import styles from "./Popup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import useMedia from "../../utils/useMedia";

interface PopupProps {
  label: string;
  options: string[];
  handleToggle(event: React.MouseEvent<HTMLButtonElement>): void;
  onOptionsClicked(option: string): void | undefined;
}

const Popup: React.FunctionComponent<PopupProps> = ({
  label,
  options,
  handleToggle,
  onOptionsClicked,
}) => {
  const isTablet = useMedia("(min-width:48em)");

  return (
    <>
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
              <li
                className={styles.Popup_item}
                key={label + i}
                onClick={() => onOptionsClicked(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <footer className={styles.Popup_footer}>
          <Button
            label={"Confirm your choice"}
            type="button"
            onClick={handleToggle}
            category={"primary"}
            extraClasses={[styles.Popup_closeButton]}
          />
        </footer>
      </section>
      {isTablet && <div className={styles.Popup_backdrop}></div>}
    </>
  );
};

export default Popup;
