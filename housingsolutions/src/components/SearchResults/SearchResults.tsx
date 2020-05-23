import * as React from "react";
import * as types from "../../types";
import styles from "./SearchResults.module.scss";
import PropertyList from "../PropertyList/PropertyList";
import SearchResultsHeader from "../SearchResultsHeader/SearchResultsHeader";
import LoadMore from "../LoadMore/LoadMore";

interface SearchResultsProps {
  loadedProperties?: number;
  maxProperties?: number;
  properties?: types.PropertyType[];
  hideSortOption?: boolean;
  hideTotalProperties?: boolean;
  onLoadMore: () => void;
  shouldNavigate?: boolean;
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({
  loadedProperties,
  maxProperties,
  properties = [],
  hideSortOption = false,
  hideTotalProperties = false,
  onLoadMore,
  shouldNavigate = false,
}) => {
  return (
    <section className={styles.SearchResults}>
      {properties.length > 0 ? (
        <div className={styles.SearchResults_propertyList}>
          <SearchResultsHeader
            properties={properties}
            hideSortOption={hideSortOption}
            hideTotalProperties={hideTotalProperties}
          />
          <PropertyList properties={properties} />
          <LoadMore
            onLoadMore={onLoadMore}
            loadedProperties={loadedProperties}
            maxProperties={maxProperties}
            shouldNavigate={shouldNavigate}
          />
        </div>
      ) : (
        <h2 className={styles.SearchResults_NoResults}>0 Property found</h2>
      )}
    </section>
  );
};

export default SearchResults;
