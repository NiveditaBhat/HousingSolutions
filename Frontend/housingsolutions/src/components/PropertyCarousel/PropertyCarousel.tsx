import * as React from "react";

import * as types from "../../types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./PropertyCarousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropertyListProps {
  propertyImages: types.PropertyImage[];
  onClose: () => void;
  selectedImage: number;
}

const PropertyCarousel: React.FunctionComponent<PropertyListProps> = ({
  propertyImages,
  onClose,
  selectedImage,
}) => {
  return (
    <section className={styles.PropertyCarousel}>
      <div className={styles.PropertyCarousel_close} onClick={onClose}>
        <FontAwesomeIcon icon="times" size="lg" />
      </div>
      <Carousel
        showThumbs={false}
        dynamicHeight
        className={styles.PropertyCarousel_container}
        selectedItem={selectedImage}
        useKeyboardArrows
      >
        {propertyImages.map(image => (
          <div key={image.alt}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default PropertyCarousel;
