import { gql } from "apollo-boost";

export const FILTER_PROPERTIES = gql`
  query searchProperties(
    $searchFilter: SearchInput
    $sortParams: SortByFields
    $order: SortOrder
    $offset: Int
    $limit: Int
  ) {
    property {
      searchProperties(
        filterParams: $searchFilter
        sortParams: $sortParams
        order: $order
        offset: $offset
        limit: $limit
      ) {
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
