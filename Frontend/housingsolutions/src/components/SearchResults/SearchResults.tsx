import * as React from "react";
import * as types from "../../types";
import styles from "./SearchResults.module.scss";
import PropertyList from "../PropertyList/PropertyList";
import Button from "../Button/Button";
import classNames from "classnames";
import SortProperties from "../SortProperties/SortProperties";

interface SearchResultsProps {
  properties: types.PropertyType[];
  extraClasses?: string[];
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({
  properties,
  extraClasses,
}) => {
  return (
    <section className={classNames(styles.SearchResults, extraClasses)}>
      {properties.length > 0 ? (
        <>
          <header className={styles.SearchResults_header}>
            <div className={styles.SearchResults_titleContainer}>
              <h2 className={styles.SearchResults_title}>
                <span>Rental Apartments in The Netherlands</span>
              </h2>
              <span>
                <strong>{properties.length} properties</strong>
              </span>
            </div>
            <SortProperties />
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
