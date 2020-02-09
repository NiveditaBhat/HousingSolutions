import * as React from "react";
import styles from "./SearchContainer.module.scss";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMedia from "../../utils/useMedia";

const SearchContainer: React.FunctionComponent = () => {
  const isTablet = useMedia("(min-width:48em)");

  return (
    <form>
      <section className={styles.SearchContainer}>
        <div className={styles.SearchContainer_titleBlock}>
          <span className={styles.SearchContainer_title}>Find your Rental Property now</span>
        </div>
        <div className={styles.SearchContainer_cityBlock}>
          <Select defaultLabel="Country" options={["No Preference", "Furnished", "Unfurnished"]} />
        </div>
        <div className={styles.SearchContainer_buttonBlock}>
          <Button
            type="primary"
            label={"Search"}
            onClick={() => alert("ff")}
            extraClasses={[styles.SearchContainer_searchButton]}
          >
            {isTablet && <FontAwesomeIcon icon="search" />}
          </Button>
        </div>
        <div className={styles.SearchContainer_priceBlock}>
          <Select
            defaultLabel="Price"
            options={[
              "No Preference",
              "> €500",
              "> €1000",
              "> €2000",
              "> €3000",
              "> €4000",
              "> €5000",
              "> €7000",
            ]}
          />
        </div>
        <div className={styles.SearchContainer_bedroomsBlock}>
          <Select defaultLabel="Bedrooms" options={["No Preference", "1", "2", "3", "4", "5"]} />
        </div>
        <div className={styles.SearchContainer_interiorBlock}>
          <Select
            defaultLabel="Interior"
            options={["No Preference", "Furnished", "Unfurnished", "Semi-furnished"]}
          />
        </div>
        <div className={styles.SearchContainer_categoryBlock}>
          <Select
            defaultLabel="Category"
            options={["No Preference", "Apartment", "Room", "Bungalow", "House"]}
          />
        </div>
      </section>
    </form>
  );
};

export default SearchContainer;
