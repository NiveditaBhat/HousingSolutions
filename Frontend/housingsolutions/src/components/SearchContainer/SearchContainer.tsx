import * as React from "react";
import styles from "./SearchContainer.module.scss";
import Dropdown from "../Dropdown/Dropdown";

const SearchContainer: React.FunctionComponent = () => {
  return (
    <form>
      <section className={styles.SearchContainer}>
        <div className={styles.SearchContainer_cityBlock}>
          <Dropdown
            label="Price"
            options={[
              { key: "one", value: "Furnished" },
              { key: "two", value: "Unfurnished" },
            ]}
          />
        </div>
        <div className={styles.SearchContainer_countryBlock}>
          <Dropdown
            label="country"
            options={[
              { key: "three", value: "Furnished" },
              { key: "four", value: "Unfurnished" },
            ]}
          />
        </div>
        <div className={styles.SearchContainer_titleBlock}>Search</div>
        <div className={styles.SearchContainer_priceBlock}>Price</div>
        <div className={styles.SearchContainer_bedroomsBlock}>Bedroom</div>
        <div className={styles.SearchContainer_categoryBlock}>Category</div>
      </section>
    </form>
  );
};

export default SearchContainer;
