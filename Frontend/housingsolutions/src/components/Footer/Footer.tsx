import * as React from "react";
import styles from "./Footer.module.scss";
import FooterItem from "../FooterItem/FooterItem";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const Footer: React.FunctionComponent = () => {
  const footerlinks = [
    {
      title: "Get Started",
      subLinks: ["Home", "Sign up", "Downloads"],
    },
    {
      title: "About Us",
      subLinks: ["Company Information", "Contact Us", "Reviews"],
    },
    {
      title: "Support",
      subLinks: ["FAQ", "Help Desk", "Forums"],
    },
    {
      title: "Legal",
      subLinks: ["Terms Of Service", "Terms Of Use", "Privacy Policy"],
    },
  ];

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
      <section className={styles.Footer_subFooter}>@2020 Copyright HousingSolutions</section>
    </footer>
  );
};

export default Footer;
