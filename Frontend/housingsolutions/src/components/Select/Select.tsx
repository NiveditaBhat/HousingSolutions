import * as React from "react";
import styles from "./Select.module.scss";
import ClickOutside from "../ClickOutside/ClickOutside";
import Dropdown from "../Dropdown/Dropdown";
import SelectButton from "../SelectButton/SelectButton";
import useMedia from "../../utils/useMedia";
import Popup from "../Popup/Popup";

interface SelectProps {
  defaultLabel: string;
  options: Array<{ id: string; text: string } | string>;
  onChange: (value: string) => void;
  preSelect?: string;
}

const Select: React.FunctionComponent<SelectProps> = ({
  defaultLabel,
  options,
  onChange,
  preSelect,
}) => {
  const [toggle, setToggle] = React.useState(false);
  const [label, setLabel] = React.useState(defaultLabel);
  const [updatedOptions, setOptions] = React.useState(options);

  const isDesktop = useMedia("(min-width:64em)");

  const filterOptions = React.useCallback(option => {
    return options.filter(selectOption => {
      const optionObj = typeof selectOption === "string" ? selectOption : selectOption.text;
      return optionObj !== option ? option : null;
    });
  }, []);

  React.useEffect(() => {
    if (preSelect) {
      setLabel(preSelect);
      setOptions(filterOptions(preSelect));
    }
  }, [preSelect]);

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

  const handleOptionsClick = React.useCallback(
    option => {
      setLabel(option);
      if (isDesktop) {
        setToggle(!toggle);
        setOptions(filterOptions(option));
      }
      onChange(option);
    },
    [label, toggle, updatedOptions]
  );

  const Select = (
    <section className={styles.Select}>
      <SelectButton
        label={toggle ? defaultLabel : label}
        handleToggle={handleToggle}
        toggle={toggle}
      />
      {isDesktop
        ? toggle && <Dropdown options={updatedOptions} onOptionsClicked={handleOptionsClick} />
        : toggle && (
            <Popup
              label={defaultLabel}
              options={options}
              handleToggle={handleClickOutside}
              onOptionsClicked={handleOptionsClick}
            />
          )}
    </section>
  );

  return isDesktop ? (
    <ClickOutside onClickOutside={handleClickOutside}>{Select}</ClickOutside>
  ) : (
    Select
  );
};

export default Select;
