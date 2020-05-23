import * as React from "react";
import styles from "./Footer.module.scss";
import FooterItem from "../FooterItem/FooterItem";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { footerlinks } from "../../utils/data";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.Footer}>
      <section className={styles.Footer_mainLinks}>
        {footerlinks.map(footerLink => (
          <FooterItem
            key={footerLink.title}
            title={footerLink.title}
            subLinks={footerLink.subLinks}
          />
        ))}
      </section>
      <SocialMediaIcons />
      <div className={styles.Footer_subFooter}>@2020 Copyright HousingSolutions</div>
    </footer>
  );
};

export default Footer;
