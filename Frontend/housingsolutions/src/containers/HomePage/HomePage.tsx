import * as React from "react";
import styles from "./HomePage.module.scss";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { GET_ALL_PROPERTIES } from "../../gql/getAllProperties";
import { useQuery } from "@apollo/react-hooks";
import AboutUs from "../../components/AboutUs/AboutUs";
import Loader from "../../components/Loader/Loader";
import CompanyStats from "../../components/CompanyStats/CompanyStats";
import SearchError from "../../components/SearchError/SearchError";
import Contact from "../../components/Contact/Contact";

const HomePage: React.FunctionComponent = () => {
  const { loading, data, error } = useQuery(GET_ALL_PROPERTIES);

  return (
    <section className={styles.Home_container}>
      <SearchContainer />
      <AboutUs />
      <CompanyStats />
      {loading ? (
        <Loader />
      ) : !error ? (
        <SearchResults properties={data.property.allProperties} />
      ) : (
        <SearchError />
      )}
      <Contact />
    </section>
  );
};

export default HomePage;
