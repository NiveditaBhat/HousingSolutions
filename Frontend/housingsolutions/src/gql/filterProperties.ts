import { gql } from "apollo-boost";

export const FILTER_PROPERTIES = gql`
  query searchProperties($searchFilter: SearchInput) {
    property {
      searchProperties(filterParams: $searchFilter) {
        id
        name
        bedroom
        interior
        propertyPrice {
          rent
        }
        address {
          street
          city
          country
        }
        Image {
          id
          url
          alt
        }
      }
    }
  }
`;
