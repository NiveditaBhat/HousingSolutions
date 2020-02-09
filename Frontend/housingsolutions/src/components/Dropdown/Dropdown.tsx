import * as React from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  defaultLabel: string;
  options: string[];
  onOptionsClicked(option: string): void | undefined;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  defaultLabel,
  options,
  onOptionsClicked,
}) => {
  return (
    <ul className={styles.Dropdown}>
      {options.map((option, i) => (
        <li
          className={styles.Dropdown_option}
          key={defaultLabel + i}
          onClick={() => onOptionsClicked(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
