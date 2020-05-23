import { gql } from "apollo-boost";

export const TOTAL_PROPERTIES = gql`
  query totalProperties($searchFilter: SearchInput) {
    property {
      totalProperties(filterParams: $searchFilter)
    }
  }
`;
