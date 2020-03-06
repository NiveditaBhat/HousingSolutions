import React, { useState } from "react";
import styles from "./Search.module.scss";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMedia from "../../utils/useMedia";
import SearchBar from "../SearchBar/SearchBar";
import { searchOptions } from "../../utils/data";
import * as types from "../../types";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/index";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

interface SearchProps {
  updateSearchFilter: (filter: types.SearchInput) => void;
  extraClasses?: string[];
  navigate?: boolean;
}

//update 'SearchFilter' in the store whenever the search inputs change
const mapDispatchToProps = (dispatch: Dispatch<types.UpdateFilterAction>) => ({
  updateSearchFilter: (filter: types.SearchInput) => dispatch(updateFilter(filter)),
});

const Search: React.FunctionComponent<SearchProps> = ({
  updateSearchFilter,
  extraClasses,
  navigate,
}) => {
  const isTablet = useMedia("(min-width:48em)");
  const [rent, setRent] = useState(0);
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [interior, setInterior] = useState("");
  const [bedroom, setBedroom] = useState(0);
  const history = useHistory();

  const handleSubmit = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const searchInput = Object.assign(
        {},
        city && { city },
        rent && { rent },
        category && { category },
        interior && { interior },
        bedroom && { bedroom },
        { country: "NL" }
      );
      updateSearchFilter(searchInput);
      //navigate to search page after updating the 'SearchFilter' in the store
      if (navigate) history.push("/search");
    },
    [city, rent, category, interior, bedroom]
  );

  return (
    <form>
      <section className={classNames(styles.Search, extraClasses)}>
        <div className={styles.Search_titleBlock}>
          <span className={styles.Search_title}>Find your Rental Property now</span>
        </div>
        <div className={styles.Search_cityBlock}>
          <SearchBar suggestions={searchOptions.city} onChange={value => setCity(value)} />
        </div>
        <div className={styles.Search_buttonBlock}>
          <Button
            category="primary"
            type="button"
            label={"Search"}
            onClick={handleSubmit}
            extraClasses={[styles.Search_searchButton]}
          >
            {isTablet && <FontAwesomeIcon icon="search" />}
          </Button>
        </div>
        <div className={styles.Search_priceBlock}>
          <Select
            defaultLabel="Price"
            options={searchOptions.price}
            onChange={value => setRent(Number(value.replace(/^\D+/g, "")))}
          />
        </div>
        <div className={styles.Search_bedroomsBlock}>
          <Select
            defaultLabel="Bedrooms"
            options={searchOptions.bedrooms}
            onChange={value => setBedroom(+value)}
          />
        </div>
        <div className={styles.Search_interiorBlock}>
          <Select
            defaultLabel="Interior"
            options={searchOptions.interior}
            onChange={value => setInterior(value !== "No Preference" ? value : "")}
          />
        </div>
        <div className={styles.Search_categoryBlock}>
          <Select
            defaultLabel="Category"
            options={searchOptions.category}
            onChange={value => setCategory(value !== "No Preference" ? value : "")}
          />
        </div>
      </section>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(Search);
