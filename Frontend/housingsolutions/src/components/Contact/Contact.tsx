import * as React from "react";
import styles from "./Contact.module.scss";
import MapContainer from "../MapContainer/MapContainer";
import ContactBlock from "../ContactBlock/ContactBlock";

const Contact: React.FunctionComponent = () => {
  return (
    <section className={styles.Contact} id="contact">
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
        <ContactBlock />
      </div>
    </section>
  );
};

export default Contact;
