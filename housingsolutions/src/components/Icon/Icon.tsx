import * as React from "react";
import styles from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  text: string;
  name: IconProp;
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
