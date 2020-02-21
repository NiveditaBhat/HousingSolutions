import * as React from "react";
import * as types from "../../types";
import styles from "./SearchResults.module.scss";
import Property from "../Property/Property";

interface SearchResultsProps {
  properties: types.PropertyType[];
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({ properties }) => {
  return (
    <section className={styles.SearchResults}>
      {properties.map(property => (
        <a href="#" className={styles.SearchResults_anchor}>
          <Property key={property.id} property={property} />
        </a>
      ))}
    </section>
  );
};

export default SearchResults;
