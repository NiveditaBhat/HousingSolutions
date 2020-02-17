import * as React from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  options: string[];
  onOptionsClicked(option: string): void | undefined;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ options, onOptionsClicked }) => {
  return (
    <ul className={styles.Dropdown}>
      {options.map((option, i) => (
        <li
          className={styles.Dropdown_option}
          key={option}
          onClick={() => onOptionsClicked(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
