import * as React from "react";
import styles from "./SelectButton.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SelectButtonProps {
  label: string;
  handleToggle(event: React.MouseEvent<HTMLButtonElement>): void;
  toggle: boolean;
}

const SelectButton: React.FunctionComponent<SelectButtonProps> = ({
  toggle,
  label,
  handleToggle,
}) => {
  return (
    <Button
      label={label}
      type={"default"}
      onClick={handleToggle}
      extraClasses={[styles.SelectButton]}
    >
      {toggle ? (
        <FontAwesomeIcon icon="chevron-up" className={styles.SelectButton_chevron} />
      ) : (
        <FontAwesomeIcon icon="chevron-down" className={styles.SelectButton_chevron} />
      )}
    </Button>
  );
};

export default SelectButton;
