import * as React from "react";
import styles from "./Select.module.scss";
import ClickOutside from "../ClickOutside/ClickOutside";
import Dropdown from "../Dropdown/Dropdown";
import SelectButton from "../SelectButton/SelectButton";
import useMedia from "../../utils/useMedia";
import Popup from "../Popup/Popup";

interface SelectProps {
  label: string;
  options: string[];
}

const Select: React.FunctionComponent<SelectProps> = ({ label, options }) => {
  const [toggle, setToggle] = React.useState(false);
  const isDesktop = useMedia("(min-width:64em)");

  const handleToggle = React.useCallback(
    e => {
      e.preventDefault();
      setToggle(!toggle);
      console.log(toggle);
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

  const Select = (
    <section className={styles.Select}>
      <SelectButton label={label} handleToggle={handleToggle} toggle={toggle} />
      {isDesktop
        ? toggle && <Dropdown label={label} options={options} />
        : toggle && <Popup label={label} options={options} handleToggle={handleClickOutside} />}
    </section>
  );

  return isDesktop ? (
    <ClickOutside onClickOutside={handleClickOutside}>{Select}</ClickOutside>
  ) : (
    Select
  );
};

export default Select;
