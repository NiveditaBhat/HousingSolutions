import * as React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  label: string;
  type: "primary" | "secondary" | "default";
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  children?: React.ReactNode | null | undefined;
  extraClasses?: string[];
}

const buttonTypes = {
  primary: "Button___primary",
  secondary: "Button___secondary",
  default: "Button___default",
};

const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  label,
  children,
  type,
  extraClasses,
}) => {
  const buttonType = buttonTypes[type];
  return (
    <button
      onClick={onClick}
      className={classNames(styles.Button, styles[buttonType], extraClasses)}
    >
      <span>{label}</span>
      {children}
    </button>
  );
};

export default Button;
