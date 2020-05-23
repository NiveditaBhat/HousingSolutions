import * as React from "react";
import styles from "./AboutUs.module.scss";
import realEstateImage from "../../static/images/real-estate.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { aboutUs } from "../../utils/data";

const AboutUs: React.FunctionComponent = () => {
  return (
    <section className={styles.AboutUs}>
      <h2 className={styles.AboutUs_title}>
        <span>What is Housing Solutions</span>
      </h2>
      <div className={styles.AboutUs_section}>
        <table className={styles.AboutUs_infoList}>
          <tbody>
            {aboutUs.map(item => (
              <tr key={item.icon}>
                <td>
                  <FontAwesomeIcon icon={item.icon as IconName} />
                </td>
                <td>{item.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img className={styles.AboutUs_img} src={realEstateImage} alt="realEstate" />
      </div>
    </section>
  );
};

export default AboutUs;
