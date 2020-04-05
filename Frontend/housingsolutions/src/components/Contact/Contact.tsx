import * as React from "react";
import styles from "./Contact.module.scss";
import MapContainer from "../MapContainer/MapContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../Icon/Icon";

const Contact: React.FunctionComponent = () => {
  return (
    <section className={styles.Contact}>
      <header className={styles.Contact_header}>
        <h2 className={styles.Contact_title}>
          <span>We Are Available For You 24/7</span>
        </h2>
        <span className={styles.Contact_subTitle}>
          OUR ONLINE SUPPORT SERVICE IS ALWAYS 24 HOURS
        </span>
      </header>
      <div className={styles.Contact_body}>
        <MapContainer title="HousingSolutions" position={{ lat: 51.43337, lng: 5.47727 }} />
        <div className={styles.Contact_info}>
          <div className={styles.Contact_infoBlock}>
            <header className={styles.Contact_blockTitle}>
              <Icon name="address-book" text={"Address"} extraClasses={[styles.Contact_icon]} />
            </header>
            <div className={styles.Contact_details}>
              Frederik van Eedenplein 25-183, 5611 KT Eindhoven
            </div>
          </div>
          <div className={styles.Contact_infoBlock}>
            <header className={styles.Contact_blockTitle}>
              <Icon name="envelope" text={"Mail"} extraClasses={[styles.Contact_icon]} />
            </header>
            <div className={styles.Contact_details}>contact@HousingSolutions.com</div>
          </div>
          <div className={styles.Contact_infoBlock}>
            <header className={styles.Contact_blockTitle}>
              <Icon name="phone-alt" text={"Call"} extraClasses={[styles.Contact_icon]} />
            </header>
            <div className={styles.Contact_details}>
              <div>+99 0215469875</div>
              <div>666 35874692050</div>
            </div>
          </div>
          <div className={styles.Contact_infoBlock}>
            <header className={styles.Contact_blockTitle}>
              <Icon
                name="user-circle"
                text={"Social Account"}
                extraClasses={[styles.Contact_icon]}
              />
            </header>
            <div className={`${styles.Contact_details} ${styles.Contact_socialMedia}`}>
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
              <FontAwesomeIcon icon={["fab", "google-plus"]} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
