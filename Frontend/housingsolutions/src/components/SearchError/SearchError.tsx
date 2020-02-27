import * as React from "react";
import styles from "./SearchError.module.scss";

const SearchError: React.FunctionComponent = () => {
  return (
    <section className={styles.SearchError}>
      <h2>Sorry, something went wrong !</h2>
      <span> Please try again in sometime</span>
    </section>
  );
};

export default SearchError;
