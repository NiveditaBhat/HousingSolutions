import * as React from "react";
import styles from "./Dropdown.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClickOutside from "../ClickOutside/ClickOutside";

interface DropdownProps {
  label: string;
  options: string[];
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ label, options }) => {
  return (
    <ul className={styles.Dropdown}>
      {options.map((option, i) => (
        <li className={styles.Dropdown_option} key={label + i}>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
