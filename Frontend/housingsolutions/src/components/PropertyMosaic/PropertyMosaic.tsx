import * as React from "react";
import styles from "./PropertyMosaic.module.scss";
import * as types from "../../types";
import fallbackImage from "../../static/images/fallback.png";
import { mosaicTypes } from "../../utils/data";
import classNames from "classnames";
import useMedia from "../../utils/useMedia";

interface PropertyListProps {
  propertyImages: types.PropertyImage[];
  onClick: (target: "image", url: string) => void;
}

const PropertyMosaic: React.FunctionComponent<PropertyListProps> = ({
  propertyImages,
  onClick,
}) => {
  const isDesktop = useMedia("(min-width:64em)");
  const types = !isDesktop
    ? mosaicTypes.filter(mosaic => mosaic.type !== "bedroom" && mosaic.type !== "kitchen")
    : mosaicTypes;
  const buttonBlock = !isDesktop ? "common" : "kitchen";
  const morePhotos = propertyImages.length - types.length;
  const getImageUrl = (images: types.PropertyImage[], type: string) => {
    const image = images.find(image => image.alt === type);
    return image ? image.url : fallbackImage;
  };

  return (
    <section className={styles.PropertyMosaic}>
      {types.map(image => (
        <div
          key={image.type}
          className={classNames(
            styles.PropertyMosaic_block,
            styles["PropertyMosaic_" + image.type]
          )}
          onClick={() => onClick("image", getImageUrl(propertyImages, image.type))}
        >
          <img src={getImageUrl(propertyImages, image.type)} alt={image.type} />
          {image.type === buttonBlock && (
            <span className={styles.PropertyMosaic_morePhotos}>
              {morePhotos} more photos available
            </span>
          )}
        </div>
      ))}
    </section>
  );
};

export default PropertyMosaic;
