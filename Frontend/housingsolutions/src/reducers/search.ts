import { UPDATE_FILTER } from "../constants/ActionConstants";

const initialState = { searchFilter: {} };

export default function search(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_FILTER:
      const filter = action.payload;
      return { ...state, searchFilter: filter };

    default:
      return state;
  }
}
