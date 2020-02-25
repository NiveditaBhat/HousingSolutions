import * as React from "react";
import styles from "./PropertyList.module.scss";
import * as types from "../../types";
import Property from "../Property/Property";
import Button from "../Button/Button";

interface PropertyListProps {
  properties: types.PropertyType[];
}

const PropertyList: React.FunctionComponent<PropertyListProps> = ({ properties }) => {
  return (
    <section className={styles.PropertyList}>
      {properties.map(property => (
        <a href="#" key={property.id} className={styles.PropertyList_anchor}>
          <Property property={property} />
        </a>
      ))}
    </section>
  );
};

export default PropertyList;
