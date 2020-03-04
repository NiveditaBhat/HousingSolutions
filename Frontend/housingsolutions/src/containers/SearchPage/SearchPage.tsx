import * as React from "react";
import styles from "./SearchPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { GET_ALL_PROPERTIES } from "../../gql/getAllProperties";
import { useQuery } from "@apollo/react-hooks";
import Search from "../../components/Search/Search";

const SearchPage: React.FunctionComponent = () => {
  //const { loading, data, error } = useQuery(GET_ALL_PROPERTIES);

  return (
    <section className={styles.Search}>
      <Header />
      <section className={styles.Search_container}>
        <Search />
      </section>
      <Footer />
    </section>
  );
};

export default SearchPage;
