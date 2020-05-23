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
import { updateSearchFilter } from "../../actions/index";
import { Dispatch } from "redux";
import classNames from "classnames";
import queryString from "query-string";

interface SearchProps {
  updateSearchFilter: (filter: types.SearchInput) => void;
  extraClasses?: string[];
  onSubmit?: (searchInput: types.SearchInput) => void;
  param?: queryString.ParsedQuery<string>;
}

//update 'SearchFilter' in the store whenever the search inputs change
const mapDispatchToProps = (dispatch: Dispatch<types.UpdateSearchFilterAction>) => ({
  updateSearchFilter: (filter: types.SearchInput) => dispatch(updateSearchFilter(filter)),
});

const Search: React.FunctionComponent<SearchProps> = ({
  updateSearchFilter,
  extraClasses,
  onSubmit,
  param,
}) => {
  const isTablet = useMedia("(min-width:48em)");
  const [formState, setFormState] = useState({
    rent: 0,
    city: "",
    category: "",
    interior: "",
    bedroom: 0,
  });

  const handleStateChange = (name: string, value: string | number): void => {
    const state = { ...formState };
    setFormState(Object.assign(state, { [name]: value }));
  };

  const submitSearchQuery = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const { city, rent, category, interior, bedroom } = formState;
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
      onSubmit && onSubmit(searchInput);
    },
    [formState]
  );

  return (
    <form>
      <section className={classNames(styles.Search, extraClasses)}>
        <div className={styles.Search_titleBlock}>
          <span className={styles.Search_title}>Find your Rental Property now</span>
        </div>
        <div className={styles.Search_cityBlock}>
          <SearchBar
            suggestions={searchOptions.city}
            onChange={value => handleStateChange("city", value)}
            defaultValue={param?.city as string}
          />
        </div>
        <div className={styles.Search_buttonBlock}>
          <Button
            category="primary"
            type="button"
            label={"Search"}
            onClick={submitSearchQuery}
            extraClasses={[styles.Search_searchButton]}
          >
            {isTablet && <FontAwesomeIcon icon="search" />}
          </Button>
        </div>
        <div className={styles.Search_priceBlock}>
          <Select
            defaultLabel="Price"
            options={searchOptions.price}
            onChange={value => handleStateChange("rent", Number(value.replace(/^\D+/g, "")))}
            preSelect={param?.rent ? ((">€" + param.rent) as string) : ""}
          />
        </div>
        <div className={styles.Search_bedroomsBlock}>
          <Select
            defaultLabel="Bedrooms"
            options={searchOptions.bedrooms}
            onChange={value => handleStateChange("bedroom", +value)}
            preSelect={param?.bedroom as string}
          />
        </div>
        <div className={styles.Search_interiorBlock}>
          <Select
            defaultLabel="Interior"
            options={searchOptions.interior}
            onChange={value =>
              handleStateChange("interior", value !== "No Preference" ? value : "")
            }
            preSelect={param?.interior as string}
          />
        </div>
        <div className={styles.Search_categoryBlock}>
          <Select
            defaultLabel="Category"
            options={searchOptions.category}
            onChange={value =>
              handleStateChange("category", value !== "No Preference" ? value : "")
            }
            preSelect={param?.category as string}
          />
        </div>
      </section>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(Search);
