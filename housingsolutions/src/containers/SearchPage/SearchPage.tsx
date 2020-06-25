import * as React from "react";
import styles from "./SearchPage.module.scss";

import Search from "../../components/Search/Search";

import { useLocation } from "react-router";

import queryString from "query-string";
import SearchResultsContainer from "../../components/SearchResultsContainer/SearchResultsContainer";

const SearchPage: React.FunctionComponent = () => {
  const param = useLocation().search;
  const [queryParam, setParam] = React.useState<queryString.ParsedQuery<string>>({});

  //get query string object from query param, on page load
  React.useEffect(() => {
    setParam(queryString.parse(param));
  }, [param]);

  return (
    <section className={styles.SearchPage_container}>
      <div className={styles.SearchPage_heroImage} />
      <div className={styles.SearchPage_searchWrapper}>
        <Search extraClasses={[styles.SearchPage_search]} param={queryParam} />
      </div>
      <SearchResultsContainer />
    </section>
  );
};
export default SearchPage;
