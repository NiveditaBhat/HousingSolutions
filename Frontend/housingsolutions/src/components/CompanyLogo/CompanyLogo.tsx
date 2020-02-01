import * as React from "react";
import styles from "./CompanyLogo.module.scss";
import { ReactComponent as Icon } from "../../static/svgs/companylogo.svg";

const CompanyLogo: React.FunctionComponent = () => {
  return (
    <section className={styles.CompanyLogo}>
      <Icon className={styles.CompanyLogo_icon} />
      <span className={styles.CompanyLogo_title}>HousingSolutions</span>
    </section>
  );
};

export default CompanyLogo;
