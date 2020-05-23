import * as React from "react";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  value: number;
  max: number;
  type: string;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ value, max, type }) => {
  return (
    <>
      <span className={styles.Progressbar_info}>
        {value} of {max} {type}
      </span>
      <progress className={styles.Progressbar} value={value} max={max}>
        {max}
      </progress>
    </>
  );
};

export default ProgressBar;
