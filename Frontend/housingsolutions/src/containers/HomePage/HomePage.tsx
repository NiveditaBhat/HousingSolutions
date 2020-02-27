import * as React from "react";
import styles from "./HomePage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { GET_ALL_PROPERTIES } from "../../gql/getAllProperties";
import { useQuery } from "@apollo/react-hooks";
import AboutUs from "../../components/AboutUs/AboutUs";
import Loader from "../../components/Loader/Loader";
import CompanyStats from "../../components/CompanyStats/CompanyStats";
import SearchError from "../../components/SearchError/SearchError";

const HomePage: React.FunctionComponent = () => {
  const { loading, data, error } = useQuery(GET_ALL_PROPERTIES);

  return (
    <section className={styles.Home}>
      <Header />
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
      </section>
      <Footer />
    </section>
  );
};

export default HomePage;
