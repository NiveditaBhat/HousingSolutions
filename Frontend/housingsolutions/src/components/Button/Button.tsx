import * as React from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  label: string;
  type: "primary" | "secondary" | "default";
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  children?: React.ReactNode | null | undefined;
}

const buttonTypes = {
  primary: "Button___primary",
  secondary: "Button___secondary",
  default: "Button___default",
};

const Button: React.FunctionComponent<IButtonProps> = ({ onClick, label, children, type }) => {
  const buttonType = buttonTypes[type];
  return (
    <button className={`${styles.Button} ${styles[buttonType]}`} onClick={onClick}>
      <span>{label}</span>
      {children}
    </button>
  );
};

export default Button;
