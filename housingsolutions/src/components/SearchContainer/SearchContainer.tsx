import * as React from "react";
import styles from "./SearchContainer.module.scss";
import houses from "../../static/images/houses3.jpg";
import Search from "../Search/Search";
import * as types from "../../types";

interface SearchContainerProps {
  onSubmit?: (searchInput: types.SearchInput) => void;
}

const SearchContainer: React.FunctionComponent<SearchContainerProps> = ({ onSubmit }) => {
  return (
    <section className={styles.SearchContainer}>
      <div className={styles.SearchContainer_wrapper}>
        <h1 className={styles.SearchContainer_title}>
          <span>Easiest way to rent a home</span>
        </h1>
        <Search onSubmit={onSubmit} />
      </div>
      <img className={styles.SearchContainer_backgroundImage} src={houses} alt="houses" />
    </section>
  );
};

export default SearchContainer;
