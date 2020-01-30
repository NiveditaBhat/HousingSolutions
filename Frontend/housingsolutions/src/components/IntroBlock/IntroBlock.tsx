import * as React from "react";
import styles from "./IntroBlock.module.scss";
import houses from "../../static/images/houses3.jpg";
import SearchContainer from "../SearchContainer/SearchContainer";

interface IIntroBlockProps {}

const IntroBlock: React.FunctionComponent<IIntroBlockProps> = props => {
  return (
    <section className={styles.IntroBlock}>
      <div className={styles.IntroBlock_wrapper}>
        <h1 className={styles.IntroBlock_title}>
          <span>Easiest way to rent a home</span>
        </h1>
        <SearchContainer />
      </div>
      <img className={styles.IntroBlock_backgroundImage} src={houses} alt="houses" />
    </section>
  );
};

export default IntroBlock;
