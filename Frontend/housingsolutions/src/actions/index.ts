import * as types from "../../src/types";
import * as constants from "../constants/ActionConstants";

export const updateFilter = (filter: types.SearchInput): types.UpdateFilterAction => ({
  type: constants.UPDATE_FILTER,
  payload: filter,
});
