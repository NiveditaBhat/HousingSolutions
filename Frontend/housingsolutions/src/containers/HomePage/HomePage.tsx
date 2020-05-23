import * as React from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { useQuery } from "@apollo/react-hooks";
import AboutUs from "../../components/AboutUs/AboutUs";
import CompanyStats from "../../components/CompanyStats/CompanyStats";
import SearchError from "../../components/SearchError/SearchError";
import Contact from "../../components/Contact/Contact";
import { FILTER_PROPERTIES } from "../../gql/filterProperties";
import styles from "./HomePage.module.scss";
import { useHistory } from "react-router-dom";
import useMedia from "../../utils/useMedia";

const HomePage: React.FunctionComponent = () => {
  const isDesktop = useMedia("(min-width:64em)");
  const limit = isDesktop ? 6 : 4;
  const { data, error } = useQuery(FILTER_PROPERTIES, {
    variables: { limit: limit },
  });
  const history = useHistory();

  //add query string to search url
  const handleSubmit = React.useCallback(searchInput => {
    let queryString = "";
    Object.keys(searchInput).forEach(key => {
      queryString = `${queryString}&${key}=${searchInput[key]}`;
    });
    queryString = queryString.replace("&", "");

    history.push(`/search?${queryString}`);
  }, []);

  return (
    <section className={styles.Home_container}>
      <SearchContainer onSubmit={handleSubmit} />
      <AboutUs />
      <CompanyStats />
      {data && !error ? (
        <SearchResults
          properties={data.property.searchProperties}
          hideSortOption={true}
          hideTotalProperties={true}
          onLoadMore={() => history.push("/search")}
          shouldNavigate={true}
        />
      ) : (
        <SearchError />
      )}
      <Contact />
    </section>
  );
};

export default HomePage;
