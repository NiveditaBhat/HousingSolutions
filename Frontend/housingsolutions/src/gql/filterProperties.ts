import { gql } from "apollo-boost";

export const FILTER_PROPERTIES = gql`
  query searchProperties($searchFilter: SearchInput, $sortParams: SortByFields, $order: SortOrder) {
    property {
      searchProperties(filterParams: $searchFilter, sortParams: $sortParams, order: $order) {
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
