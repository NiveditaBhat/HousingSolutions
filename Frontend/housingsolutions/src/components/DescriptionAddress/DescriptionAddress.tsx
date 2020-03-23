import * as React from "react";
import styles from "./DescriptionAddress.module.scss";
import * as types from "../../types";

interface DescriptionAddressProps {
  address: types.PropertyAddress;
}

const DescriptionAddress: React.FunctionComponent<DescriptionAddressProps> = ({ address }) => {
  return (
    <div className={styles.DescriptionAddress}>
      <dl className={styles.DescriptionAddress_detail}>
        <dt>Neighbourhood</dt>
        <dd>{address.street}</dd>
        <dt>Postalcode</dt>
        <dd>{address.zipCode}</dd>
        <dt>city</dt>
        <dd>{address.city}</dd>
      </dl>
    </div>
  );
};

export default DescriptionAddress;
