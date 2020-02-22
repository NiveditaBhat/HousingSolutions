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
        <a href="#" key={property.id} className={styles.SearchResults_anchor}>
          <Property property={property} />
        </a>
      ))}
    </section>
  );
};

export default SearchResults;
