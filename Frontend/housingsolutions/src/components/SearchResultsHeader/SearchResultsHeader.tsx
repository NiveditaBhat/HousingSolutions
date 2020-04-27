import * as React from "react";
import * as types from "../../types";
import styles from "./SearchResultsHeader.module.scss";
import SortProperties from "../SortProperties/SortProperties";

interface SearchResultsHeaderProps {
  properties: types.PropertyType[];
  hideSortOption?: boolean;
  hideTotalProperties?: boolean;
}

const SearchResultsHeader: React.FunctionComponent<SearchResultsHeaderProps> = ({
  properties,
  hideSortOption,
  hideTotalProperties,
}) => {
  return (
    <header className={styles.SearchResultsHeader}>
      <div className={styles.SearchResultsHeader_titleContainer}>
        <h2 className={styles.SearchResultsHeader_title}>
          <span>Rental Apartments in The Netherlands</span>
        </h2>
        <span>{!hideTotalProperties && <strong>{properties.length} properties</strong>}</span>
      </div>
      {!hideSortOption && (
        <div className={styles.SearchResultsHeader_sortOptions}>
          <SortProperties />
        </div>
      )}
    </header>
  );
};

export default SearchResultsHeader;
