import * as React from "react";
import styles from "./Select.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClickOutside from "../ClickOutside/ClickOutside";
import Dropdown from "../Dropdown/Dropdown";
import SelectButton from "../SelectButton/SelectButton";

interface SelectProps {
  label: string;
  options: string[];
}

const Select: React.FunctionComponent<SelectProps> = ({ label, options }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = React.useCallback(
    e => {
      e.preventDefault();
      setToggle(!toggle);
    },
    [toggle]
  );

  // close Select only if its open
  const handleClickOutside = React.useCallback(
    e => {
      e.preventDefault();
      if (toggle) setToggle(!toggle);
    },
    [toggle]
  );

  return (
    <ClickOutside onClickOutside={handleClickOutside}>
      <section className={styles.Select}>
        <SelectButton label={label} handleToggle={handleToggle} toggle={toggle} />
        {toggle && <Dropdown label={label} options={options} />}
      </section>
    </ClickOutside>
  );
};

export default Select;
