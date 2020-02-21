import { gql } from "apollo-boost";

export const GET_ALL_PROPERTIES = gql`
  query {
    property {
      allProperties {
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
