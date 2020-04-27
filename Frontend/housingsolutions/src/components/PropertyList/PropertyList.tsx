import * as React from "react";
import styles from "./PropertyList.module.scss";
import * as types from "../../types";
import Property from "../Property/Property";
import { useHistory } from "react-router-dom";

interface PropertyListProps {
  properties: types.PropertyType[];
}

const PropertyList: React.FunctionComponent<PropertyListProps> = ({ properties }) => {
  const history = useHistory();
  return (
    <section className={styles.PropertyList}>
      {properties.map(property => (
        <div
          key={`${property.name}_${property.id}`}
          className={styles.PropertyList_anchor}
          onClick={() => {
            history.push(`/property/${property.id}`);
          }}
        >
          <Property property={property} />
        </div>
      ))}
    </section>
  );
};

export default PropertyList;
