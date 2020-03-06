import * as React from "react";
import styles from "./SearchContainer.module.scss";
import houses from "../../static/images/houses3.jpg";
import Search from "../Search/Search";

const SearchContainer: React.FunctionComponent = () => {
  return (
    <section className={styles.SearchContainer}>
      <div className={styles.SearchContainer_wrapper}>
        <h1 className={styles.SearchContainer_title}>
          <span>Easiest way to rent a home</span>
        </h1>
        <Search navigate={true} />
      </div>
      <img className={styles.SearchContainer_backgroundImage} src={houses} alt="houses" />
    </section>
  );
};

export default SearchContainer;
