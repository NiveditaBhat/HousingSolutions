import * as React from "react";
import styles from "./ContactBlock.module.scss";
import Icon from "../Icon/Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const contactBlock = [
  {
    header: { icon: "address-book", title: "Address" },
    details: "Frederik van Eedenplein 25-183, 5611 KT Eindhoven",
  },
  {
    header: { icon: "envelope", title: "Mail" },
    details: "ContactBlock@HousingSolutions.com",
  },
  {
    header: { icon: "phone-alt", title: "Call" },
    details: (
      <p className={styles.ContactBlock_phoneDetails}>
        <span>+99 0215469875</span>
        <span>666 35874692050</span>
      </p>
    ),
  },
  {
    header: { icon: "user-circle", title: "Social Account" },
    details: <SocialMediaIcons extraClasses={[styles.ContactBlock_socialMedia]} />,
  },
];

const ContactBlock: React.FunctionComponent = () => {
  return (
    <ul className={styles.ContactBlock}>
      {contactBlock.map(infoBlock => (
        <li key={infoBlock.header.title} className={styles.ContactBlock_info}>
          <header className={styles.ContactBlock_title}>
            <Icon
              name={infoBlock.header.icon as IconProp}
              text={infoBlock.header.title}
              extraClasses={[styles.ContactBlock_icon]}
            />
          </header>
          <div className={styles.ContactBlock_details}>{infoBlock.details}</div>
        </li>
      ))}
    </ul>
  );
};

export default ContactBlock;
