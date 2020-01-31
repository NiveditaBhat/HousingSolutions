import * as React from "react";
import styles from "./Dropdown.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IDropdownProps {
  label: string;
  options: {
    key: string;
    value: string;
  }[];
}

const Dropdown: React.FunctionComponent<IDropdownProps> = ({ label, options }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = React.useCallback(
    e => {
      e.preventDefault();
      setToggle(!toggle);
    },
    [toggle]
  );

  return (
    <section className={styles.Dropdown}>
      <Button label={label} type={"default"} onClick={handleToggle}>
        {toggle ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
      </Button>
      {toggle && (
        <ul className={styles.Dropdown_options}>
          {options.map(option => (
            <li className={styles.Dropdown_option} key={option.key}>
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Dropdown;
