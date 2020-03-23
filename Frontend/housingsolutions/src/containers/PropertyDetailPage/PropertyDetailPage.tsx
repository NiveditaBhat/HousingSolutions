import * as React from "react";
import styles from "./PropertyDetailPage.module.scss";
import { useParams } from "react-router-dom";
import { GET_PROPERTY_DETAIL } from "../../gql/getPropertyDetails";
import { useQuery } from "@apollo/react-hooks";
import PropertyCarousel from "../../components/PropertyCarousel/PropertyCarousel";
import PropertyMosaic from "../../components/PropertyMosaic/PropertyMosaic";
import PropertyDetailHeading from "../../components/PropertyDetailHeading/PropertyDetailHeading";
import { PropertyImage } from "../../types";
import PropertyDescription from "../../components/PropertyDescription/PropertyDescription";
import MapModal from "../../components/MapModal/MapModal";

const PropertyDetailPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const { data, error } = useQuery(GET_PROPERTY_DETAIL, {
    variables: { id },
  });
  const propertyDetail = data && data.property.property;
  const [carousel, toggleCarousel] = React.useState(false);
  const [mapModal, toggleModal] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);

  const handleClick = React.useCallback(
    (target, url = "") => {
      if (target === "map") {
        toggleModal(true);
      } else if (target === "image" && url !== "") {
        const index = propertyDetail.Image.findIndex((image: PropertyImage) => image.url === url);
        setImageIndex(index);
        toggleCarousel(true);
      }
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
          <PropertyDescription propertyDetail={propertyDetail} onClick={handleClick} />
          {carousel && (
            <PropertyCarousel
              propertyImages={propertyDetail.Image}
              onClose={handleClose}
              selectedImage={imageIndex}
            />
          )}
          {mapModal && (
            <MapModal
              onClose={() => toggleModal(false)}
              position={{ lat: propertyDetail.latitude, lng: propertyDetail.longitude }}
              extraClasses={[styles.PropertyDetail_mapModal]}
              options={{
                fullscreenControl: false,
              }}
            />
          )}
        </div>
      ) : null}
    </section>
  );
};

export default PropertyDetailPage;
