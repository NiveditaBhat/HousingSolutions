import * as React from "react";
import * as types from "../../types";
import styles from "./PropertyCard.module.scss";
import Icon from "../Icon/Icon";

interface PropertyCardProps {
  property: types.PropertyType;
}

const PropertyCard: React.FunctionComponent<PropertyCardProps> = ({ property }) => {
  const mainImage = property.Image.find(image => image.alt === "main");
  const image = mainImage ? mainImage : property.Image[0];
  const interiorType = property.interior.toLowerCase().replace("_", "-");
  return (
    <section className={styles.Property}>
      <header className={styles.Property_header}>
        <img className={styles.Property_img} src={image.url} alt={image.alt} />
        <div className={styles.Property_title}>
          <h3 className={styles.Property_name}>{property.name}</h3>
          <Icon
            name={"map-marker-alt"}
            text={`${property.address?.street}, ${property.address?.city}`}
            extraClasses={[styles.Property_location]}
          />
        </div>
      </header>
      <footer className={styles.Property_footer}>
        <div className={styles.Property_features}>
          <Icon
            name={"bed"}
            text={`${property.bedroom}  Bedroom`}
            extraClasses={[styles.Property_bedroom]}
          />
          <Icon name={"chair"} text={interiorType} />
        </div>
        <div className={styles.Property_rent}>€{property.propertyPrice?.rent}/month</div>
      </footer>
    </section>
  );
};

export default PropertyCard;
