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
        <Button
          label={label}
          type={"default"}
          onClick={handleToggle}
          extraClasses={[styles.Dropdown_button]}
        >
          {toggle ? (
            <FontAwesomeIcon icon="chevron-up" className={styles.Dropdown_chevron} />
          ) : (
            <FontAwesomeIcon icon="chevron-down" className={styles.Dropdown_chevron} />
          )}
        </Button>
        {toggle && (
          <ul className={styles.Dropdown_options}>
            {options.map((option, i) => (
              <li className={styles.Dropdown_option} key={label + i}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </section>
    </ClickOutside>
  );
};

export default Dropdown;
