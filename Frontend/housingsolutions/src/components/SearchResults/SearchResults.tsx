import * as React from "react";
import * as types from "../../types";
import styles from "./SearchResults.module.scss";
import PropertyList from "../PropertyList/PropertyList";
import Button from "../Button/Button";

interface SearchResultsProps {
  properties: types.PropertyType[];
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({ properties }) => {
  return (
    <section className={styles.SearchResults}>
      <h2 className={styles.SearchResults_title}>
        <span>Rooms & Apartments</span>
      </h2>
      <PropertyList properties={properties} />
      <Button
        type="primary"
        label="Load more"
        onClick={() => {
          alert("load");
        }}
        extraClasses={[styles.SearchResults_loadMore]}
      />
    </section>
  );
};

export default SearchResults;
