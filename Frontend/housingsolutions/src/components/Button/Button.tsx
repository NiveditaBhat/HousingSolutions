import * as React from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  label: string;
  type: "primary" | "secondary";
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  children?: React.ReactNode | null | undefined;
}

const buttonTypes = {
  primary: "Button___primary",
  secondary: "Button___secondary",
};

const Button: React.FunctionComponent<IButtonProps> = ({ onClick, label, children, type }) => {
  const buttonType = buttonTypes[type];
  return (
    <button className={`${styles.Button} ${styles[buttonType]}`} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

export default Button;
