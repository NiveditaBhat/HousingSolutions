import * as React from "react";
import styles from "./Counter.module.scss";
import CountUp from "react-countup";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CounterProps {
  endNumber: number;
  text: string;
  icon: IconName;
  animateCounter: boolean;
}

const Counter: React.FunctionComponent<CounterProps> = ({
  endNumber,
  text,
  icon,
  animateCounter,
}) => {
  return (
    <section className={styles.Counter}>
      <FontAwesomeIcon icon={icon as IconName} size="lg" className={styles.Counter_icon} />
      <span className={styles.Counter_counterUp}>
        <strong>{animateCounter ? <CountUp end={endNumber} /> : 0}</strong>
      </span>
      <span className={styles.Counter_message}>
        <strong>{text}</strong>
      </span>
    </section>
  );
};

export default Counter;
