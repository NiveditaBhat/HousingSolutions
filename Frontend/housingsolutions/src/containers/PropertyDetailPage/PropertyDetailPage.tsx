import * as React from "react";
import styles from "./PropertyDetailPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_PROPERTY_DETAIL } from "../../gql/getPropertyDetails";
import { useQuery } from "@apollo/react-hooks";
import PropertyCarousel from "../../components/PropertyCarousel/PropertyCarousel";
import PropertyMosaic from "../../components/PropertyMosaic/PropertyMosaic";
import PropertyDetailHeading from "../../components/PropertyDetailHeading/PropertyDetailHeading";

const PropertyDetailPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GET_PROPERTY_DETAIL, {
    variables: { id },
  });
  const propertyDetail = data && data.property.property;
  return (
    <section className={styles.PropertyDetail}>
      {data && !error ? (
        <div>
          <PropertyDetailHeading propertyDetail={propertyDetail} />
          <PropertyMosaic propertyImages={propertyDetail.Image} />
        </div>
      ) : null}
    </section>
  );
};

export default PropertyDetailPage;
