import * as React from "react";
import styles from "./PropertyDetailHeading.module.scss";
import * as types from "../../types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize } from "../../utils/Capitalize";

interface PropertyListProps {
  propertyDetail: types.PropertyType;
}

const PropertyDetailHeading: React.FunctionComponent<PropertyListProps> = ({ propertyDetail }) => {
  return (
    <header className={styles.PropertyDetailHeading}>
      <h1 className={styles.PropertyDetailHeading_title}>
        <span>{propertyDetail.name}</span>
      </h1>
      <div className={styles.PropertyDetailHeading_subTitle}>
        <span className={styles.PropertyDetailHeading_navigation}>
          <Link to="/">
            <FontAwesomeIcon icon="home" />
          </Link>
        </span>
        <span className={styles.PropertyDetailHeading_navigation}>></span>
        <span className={styles.PropertyDetailHeading_navigation}>
          <Link to={`/search?city=${propertyDetail.address?.city}`}>
            {propertyDetail.address?.city}
          </Link>
        </span>
        <span className={styles.PropertyDetailHeading_navigation}>></span>
        <span className={styles.PropertyDetailHeading_navigation}>
          <Link to={`/search?category=${capitalize(propertyDetail.category)}`}>
            {capitalize(propertyDetail.category)}
          </Link>
        </span>
        <span className={styles.PropertyDetailHeading_navigation}>></span>
        <span className={styles.PropertyDetailHeading_navigation}>{propertyDetail.name}</span>
      </div>
    </header>
  );
};

export default PropertyDetailHeading;
