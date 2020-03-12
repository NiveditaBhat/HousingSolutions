import { UPDATE_SEARCH_FILTER, UPDATE_SORT_FILTER } from "../constants/ActionConstants";

const initialState = { searchFilter: {}, sortFilter: {} };

export default function search(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_SEARCH_FILTER:
      return { ...state, searchFilter: action.payload };

    case UPDATE_SORT_FILTER:
      return { ...state, sortFilter: action.payload };

    default:
      return state;
  }
}
