import * as types from "../../src/types";
import * as constants from "../constants/ActionConstants";

export const updateSearchFilter = (filter: types.SearchInput): types.UpdateSearchFilterAction => ({
  type: constants.UPDATE_SEARCH_FILTER,
  payload: filter,
});

export const updateSortFilter = (filter: types.SortByFields): types.UpdateSortFilterAction => ({
  type: constants.UPDATE_SORT_FILTER,
  payload: filter,
});
