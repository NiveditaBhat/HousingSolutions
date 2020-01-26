import * as React from "react";
import styles from "./CompanyLogo.module.scss";
import { ReactComponent as Icon } from "../../static/svgs/companylogo.svg";

interface ICompanyLogoProps {}

const CompanyLogo: React.FunctionComponent<ICompanyLogoProps> = props => {
  return (
    <section className={styles.CompanyLogo}>
      <Icon className={styles.CompanyLogo_icon} />
      <span className={styles.CompanyLogo_title}>HousingSolutions</span>
    </section>
  );
};

export default CompanyLogo;
