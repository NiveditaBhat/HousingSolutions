import * as React from "react";
import styles from "./DescriptionHeader.module.scss";
import * as types from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DescriptionHeaderProps {
  propertyDetail: types.PropertyType;
  onClick: (target: "map" | "image", url: string | undefined) => void;
}

const DescriptionHeader: React.FunctionComponent<DescriptionHeaderProps> = ({
  propertyDetail,
  onClick,
}) => {
  return (
    <header className={styles.DescriptionHeader}>
      <div className={styles.DescriptionHeader_rent}>
        <h2>EUR {propertyDetail.propertyPrice?.rent}</h2>
        <span>per month (Bills included)</span>
      </div>
      <div className={styles.DescriptionHeader_moreInfoWrapper}>
        <div
          className={styles.DescriptionHeader_moreInfo}
          onClick={() => onClick("image", propertyDetail.Image[0].url)}
        >
          <FontAwesomeIcon icon="image" size="lg" />
          <span>{propertyDetail.Image.length} Photos</span>
        </div>
        <div className={styles.DescriptionHeader_moreInfo} onClick={() => onClick("map", "")}>
          <FontAwesomeIcon icon="map-marked-alt" size="lg" />
          <span>Map</span>
        </div>
      </div>
    </header>
  );
};

export default DescriptionHeader;
