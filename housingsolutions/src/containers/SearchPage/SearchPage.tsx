import * as React from "react";
import styles from "./SearchPage.module.scss";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useQuery } from "@apollo/react-hooks";
import * as types from "../../types";
import { FILTER_PROPERTIES } from "../../gql/filterProperties";
import { TOTAL_PROPERTIES } from "../../gql/totalProperties";
import SearchError from "../../components/SearchError/SearchError";
import Search from "../../components/Search/Search";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import useMedia from "../../utils/useMedia";
import queryString from "query-string";

type sortFilterType = { sortParams: types.SortByFields; order: types.SortOrder };

interface SearchPageProps {
  searchFilter: types.SearchInput;
  sortFilter: sortFilterType;
}

interface RootState {
  search: { searchFilter: types.SearchInput; sortFilter: sortFilterType };
}

const mapStateToProps = (state: RootState) => ({
  searchFilter: state.search.searchFilter,
  sortFilter: state.search.sortFilter,
});

const SearchPage: React.FunctionComponent<SearchPageProps> = ({ searchFilter, sortFilter }) => {
  const isDesktop = useMedia("(min-width:64em)");
  const limit = isDesktop ? 6 : 4;

  const { sortParams, order } = sortFilter;

  const [offset, setOffset] = React.useState(0);
  const [properties, setProperties] = React.useState<types.PropertyType[]>([]);

  const param = useLocation().search;
  const [queryParam, setParam] = React.useState<queryString.ParsedQuery<string>>({});

  const { data: totalProperties } = useQuery(TOTAL_PROPERTIES, {
    variables: { searchFilter },
  });
  const { data, error } = useQuery(FILTER_PROPERTIES, {
    variables: { searchFilter, sortParams, order, offset: offset, limit: limit },
  });

  const maxProperties = totalProperties && totalProperties.property.totalProperties;

  //get query string object from query param, on page load
  React.useEffect(() => {
    setParam(queryString.parse(param));
  }, [param]);

  React.useEffect(() => {
    setOffset(0);
  }, [searchFilter]);

  //handle 'load more' properties
  React.useEffect(() => {
    if (data) {
      const previous: types.PropertyType[] = offset === 0 ? [] : properties;
      const current: types.PropertyType[] = data.property.searchProperties;
      setProperties([...previous, ...current]);
    }
  }, [data]);

  return (
    <section className={styles.SearchPage_container}>
      <div className={styles.SearchPage_heroImage} />
      <div className={styles.SearchPage_searchWrapper}>
        <Search extraClasses={[styles.SearchPage_search]} param={queryParam} />
      </div>
      {data && !error ? (
        <SearchResults
          loadedProperties={properties.length}
          maxProperties={maxProperties}
          properties={properties}
          onLoadMore={(): void => setOffset(offset + limit)}
        />
      ) : (
        <SearchError />
      )}
    </section>
  );
};
export default connect(mapStateToProps)(SearchPage);