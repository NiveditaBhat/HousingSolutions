import * as React from "react";
import * as types from "../../types";
import styles from "./DescriptionSummary.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { capitalize } from "../../utils/Capitalize";

interface DescriptionSummaryProps {
  propertyDetail: types.PropertyType;
  propertySummary: { id: string; type: (propertyType: types.PropertyType) => string }[];
}

const DescriptionSummary: React.FunctionComponent<DescriptionSummaryProps> = ({
  propertyDetail,
  propertySummary,
}) => {
  return (
    <ul className={styles.DescriptionSummary}>
      {propertySummary.map(item => (
        <li className={styles.DescriptionSummary_item}>
          <FontAwesomeIcon icon={item.id as IconProp} size="sm" />
          <span>{capitalize(item.type(propertyDetail))}</span>
        </li>
      ))}
    </ul>
  );
};

export default DescriptionSummary;
