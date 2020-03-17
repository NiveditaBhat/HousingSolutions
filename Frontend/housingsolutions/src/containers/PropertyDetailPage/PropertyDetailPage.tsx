import * as React from "react";
import styles from "./PropertyDetailPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_PROPERTY_DETAIL } from "../../gql/getPropertyDetails";
import { useQuery } from "@apollo/react-hooks";
import PropertyCarousel from "../../components/PropertyCarousel/PropertyCarousel";
import PropertyMosaic from "../../components/PropertyMosaic/PropertyMosaic";
import PropertyDetailHeading from "../../components/PropertyDetailHeading/PropertyDetailHeading";
import { PropertyImage } from "../../types";

const PropertyDetailPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GET_PROPERTY_DETAIL, {
    variables: { id },
  });
  const propertyDetail = data && data.property.property;
  const [carousel, toggleCarousel] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);

  const handleClick = React.useCallback(
    url => {
      const index = propertyDetail.Image.findIndex((image: PropertyImage) => image.url === url);
      setImageIndex(index);
      toggleCarousel(true);
    },
    [imageIndex, propertyDetail]
  );

  const handleClose = React.useCallback(() => {
    toggleCarousel(false);
  }, []);

  return (
    <section className={styles.PropertyDetail}>
      {data && !error ? (
        <div>
          <PropertyDetailHeading propertyDetail={propertyDetail} />
          <PropertyMosaic propertyImages={propertyDetail.Image} onClick={handleClick} />
          {carousel && (
            <PropertyCarousel
              propertyImages={propertyDetail.Image}
              onClose={handleClose}
              selectedImage={imageIndex}
            />
          )}
        </div>
      ) : null}
    </section>
  );
};

export default PropertyDetailPage;
