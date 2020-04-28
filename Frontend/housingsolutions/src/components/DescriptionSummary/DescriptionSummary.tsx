import * as React from "react";
import * as types from "../../types";
import styles from "./DescriptionSummary.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { capitalize } from "../../utils/Capitalize";
import Icon from "../Icon/Icon";

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
        <li key={item.id} className={styles.DescriptionSummary_item}>
          <Icon name={item.id as IconProp} text={capitalize(item.type(propertyDetail))} />
        </li>
      ))}
    </ul>
  );
};

export default DescriptionSummary;
