import * as React from "react";
import styles from "./SearchContainer.module.scss";

import Button from "../Button/Button";

interface MyFormValues {
  firstName: string;
}

interface ISearchContainerProps {}

const SearchContainer: React.FunctionComponent<ISearchContainerProps> = props => {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <form>
      <section className={styles.SearchContainer}>
        <div className={styles.SearchContainer_cityBlock}>
          <Button
            label={"Search"}
            type={"primary"}
            onClick={() => {
              alert("Boom");
            }}
          />
        </div>
        <div className={styles.SearchContainer_countryBlock}>Country</div>
        <div className={styles.SearchContainer_titleBlock}>Search</div>
        <div className={styles.SearchContainer_priceBlock}>Price</div>
        <div className={styles.SearchContainer_bedroomsBlock}>Bedroom</div>
        <div className={styles.SearchContainer_categoryBlock}>Category</div>
      </section>
    </form>
  );
};

export default SearchContainer;
