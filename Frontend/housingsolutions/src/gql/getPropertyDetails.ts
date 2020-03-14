import { gql } from "apollo-boost";

export const GET_PROPERTY_DETAIL = gql`
  query getPropertyDetail($id: String) {
    property {
      property(propertyId: $id) {
        name
        bedroom
        bathroom
        availability
        category
        interior
        description
        Image {
          url
          alt
        }
        propertyPrice {
          rent
          deposit
        }
        address {
          street
          city
          country
          zipCode
        }
      }
    }
  }
`;
