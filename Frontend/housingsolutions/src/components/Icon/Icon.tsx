import * as React from "react";
import styles from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface IconProps {
  text: string;
  name:
    | "phone-alt"
    | "bars"
    | "window-close"
    | "backward"
    | "chevron-down"
    | "chevron-up"
    | "search"
    | "times"
    | "bed"
    | "bath"
    | "map-marker-alt"
    | "chair";
  extraClasses?: string[];
}

const Icon: React.FunctionComponent<IconProps> = ({ text, name, extraClasses }: IconProps) => {
  return (
    <section className={classNames(styles.Icon, extraClasses)}>
      <FontAwesomeIcon icon={name} />
      <span>{text}</span>
    </section>
  );
};

export default Icon;
