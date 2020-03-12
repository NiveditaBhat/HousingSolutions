import * as React from "react";
import styles from "./SearchPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useQuery } from "@apollo/react-hooks";
import * as types from "../../types";
import { FILTER_PROPERTIES } from "../../gql/filterProperties";
import Loader from "../../components/Loader/Loader";
import SearchError from "../../components/SearchError/SearchError";
import Search from "../../components/Search/Search";
import { connect } from "react-redux";

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
  const { sortParams, order } = sortFilter;
  const { data, error } = useQuery(FILTER_PROPERTIES, {
    variables: { searchFilter, sortParams, order },
  });

  return (
    <section className={styles.SearchPage}>
      <Header />
      <section className={styles.SearchPage_container}>
        <div className={styles.SearchPage_heroImage} />
        <Search extraClasses={[styles.SearchPage_search]} />
        {data && !error ? (
          <SearchResults
            properties={data.property.searchProperties}
            extraClasses={[styles.SearchPage_results]}
          />
        ) : (
          <SearchError />
        )}
      </section>
      <Footer />
    </section>
  );
};
export default connect(mapStateToProps)(SearchPage);
