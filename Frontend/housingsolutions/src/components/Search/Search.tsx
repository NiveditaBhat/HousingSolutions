import * as React from "react";
import styles from "./Search.module.scss";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMedia from "../../utils/useMedia";
import SearchBar from "../SearchBar/SearchBar";
import SearchOptions from "../../utils/Search.settings.json";

const Search: React.FunctionComponent = () => {
  const isTablet = useMedia("(min-width:48em)");

  return (
    <form>
      <section className={styles.Search}>
        <div className={styles.Search_titleBlock}>
          <span className={styles.Search_title}>Find your Rental Property now</span>
        </div>
        <div className={styles.Search_cityBlock}>
          <SearchBar suggestions={SearchOptions.city} />
        </div>
        <div className={styles.Search_buttonBlock}>
          <Button
            type="primary"
            label={"Search"}
            onClick={() => alert("ff")}
            extraClasses={[styles.Search_searchButton]}
          >
            {isTablet && <FontAwesomeIcon icon="search" />}
          </Button>
        </div>
        <div className={styles.Search_priceBlock}>
          <Select defaultLabel="Price" options={SearchOptions.price} />
        </div>
        <div className={styles.Search_bedroomsBlock}>
          <Select defaultLabel="Bedrooms" options={SearchOptions.bedrooms} />
        </div>
        <div className={styles.Search_interiorBlock}>
          <Select defaultLabel="Interior" options={SearchOptions.interior} />
        </div>
        <div className={styles.Search_categoryBlock}>
          <Select defaultLabel="Category" options={SearchOptions.category} />
        </div>
      </section>
    </form>
  );
};

export default Search;