import * as React from "react";

import * as types from "../../types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./PropertyCarousel.module.scss";
import Modal from "../Modal/Modal";

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
    <Modal onClose={onClose}>
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
    </Modal>
  );
};

export default PropertyCarousel;
