import * as React from "react";
import * as types from "../../types";
import styles from "./PropertyDescription.module.scss";
import { propertySummary } from "../../utils/data";
import MapContainer from "../MapContainer/MapContainer";
import DescriptionHeader from "../DescriptionHeader/DescriptionHeader";
import DescriptionSummary from "../DescriptionSummary/DescriptionSummary";
import DescriptionAddress from "../DescriptionAddress/DescriptionAddress";

interface PropertyDescriptionProps {
  propertyDetail: types.PropertyType;
  onClick: (target: "map" | "image", url: string | undefined) => void;
}

const PropertyDescription: React.FunctionComponent<PropertyDescriptionProps> = ({
  propertyDetail,
  onClick,
}) => {
  return (
    <section className={styles.PropertyDescription}>
      <DescriptionHeader propertyDetail={propertyDetail} onClick={onClick} />
      <DescriptionSummary propertyDetail={propertyDetail} propertySummary={propertySummary} />
      {propertyDetail.address && <DescriptionAddress address={propertyDetail.address} />}
      <section>
        <h2>Description</h2>
        <p>{propertyDetail.description}</p>
      </section>
      <MapContainer
        position={{ lat: propertyDetail.latitude, lng: propertyDetail.longitude }}
        extraClasses={[styles.PropertyDescription_map]}
      />
    </section>
  );
};

export default PropertyDescription;
