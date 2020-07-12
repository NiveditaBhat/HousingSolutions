import * as React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  label?: string;
  category: "primary" | "secondary" | "default";
  type: "submit" | "button";
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  children?: React.ReactNode | null | undefined;
  extraClasses?: string[];
}

const buttonCategories = {
  primary: "Button___primary",
  secondary: "Button___secondary",
  default: "Button___default",
};

const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  label,
  children,
  category,
  type,
  extraClasses,
}) => {
  const buttonType = buttonCategories[category];
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.Button, styles[buttonType], extraClasses)}
    >
      {label && <span>{label}</span>}
      {children}
    </button>
  );
};

export default Button;
