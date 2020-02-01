import * as React from "react";
import styles from "./Dropdown.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClickOutside from "../ClickOutside/ClickOutside";

interface DropdownProps {
  label: string;
  options: {
    key: string;
    value: string;
  }[];
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ label, options }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = React.useCallback(
    e => {
      e.preventDefault();
      setToggle(!toggle);
    },
    [toggle]
  );

  return (
    <ClickOutside onClickOutside={handleToggle}>
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
    </ClickOutside>
  );
};

export default Dropdown;
