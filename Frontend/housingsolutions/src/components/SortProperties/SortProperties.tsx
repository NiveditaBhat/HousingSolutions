import * as React from "react";
import styles from "./SortProperties.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "../Select/Select";
import { SortOptions } from "../../utils/data";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as types from "../../types";
import { updateSortFilter } from "../../actions";

interface SortPropertiesProps {
  updateSortFilter: Function;
}

//update 'SortFilter' in the store whenever the sort params change
const mapDispatchToProps = (dispatch: Dispatch<types.UpdateSortFilterAction>) => ({
  updateSortFilter: (filter: types.SortByFields) => dispatch(updateSortFilter(filter)),
});

const SortProperties: React.FunctionComponent<SortPropertiesProps> = ({ updateSortFilter }) => {
  const preSelect = SortOptions[0];

  const getSortOptions = React.useCallback(id => {
    const params = id?.split("_");
    return { sortParams: params[0], order: params[1] };
  }, []);

  React.useEffect(() => {
    const sortParams = getSortOptions(preSelect.id);
    sortParams && updateSortFilter(sortParams);
  }, []);

  const getSelectedOption = React.useCallback(value => {
    const id = SortOptions.find(option => option.text === value)?.id;
    const sortParams = getSortOptions(id);
    sortParams && updateSortFilter(sortParams);
  }, []);

  return (
    <section className={styles.SortProperties}>
      <Select
        defaultLabel="Sort"
        options={SortOptions}
        onChange={getSelectedOption}
        preSelect={preSelect.text}
      />
    </section>
  );
};

export default connect(null, mapDispatchToProps)(SortProperties);
