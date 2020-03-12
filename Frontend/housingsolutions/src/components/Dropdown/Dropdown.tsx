import * as React from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  options: Array<{ id: string; text: string } | string>;
  onOptionsClicked(option: string): void | undefined;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ options, onOptionsClicked }) => {
  return (
    <ul className={styles.Dropdown}>
      {options.map(option => (
        <li
          className={styles.Dropdown_option}
          key={typeof option === "string" ? option : option.id}
          onClick={() => onOptionsClicked(typeof option === "string" ? option : option.text)}
        >
          {typeof option === "string" ? option : option.text}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
