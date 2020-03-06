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
      {properties.length > 0 ? (
        <>
          <header className={styles.SearchResults_header}>
            <h2 className={styles.SearchResults_title}>
              <span>Rental Apartments in The Netherlands</span>
            </h2>
            <span>
              <strong>{properties.length} properties</strong>
            </span>
          </header>
          <PropertyList properties={properties} />
          <Button
            category="primary"
            type="button"
            label="Load more"
            onClick={() => {
              alert("load");
            }}
            extraClasses={[styles.SearchResults_loadMore]}
          />
        </>
      ) : (
        <div className={styles.SearchResults_NoResults}>
          <h2>0 Property found</h2>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
