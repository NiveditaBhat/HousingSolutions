import * as React from "react";
import styles from "./FooterItem.module.scss";
import { Link } from "react-router-dom";

interface FooterItemProps {
  title: string;
  subLinks: Array<string>;
}

const FooterItem: React.FunctionComponent<FooterItemProps> = ({
  title,
  subLinks,
}: FooterItemProps) => {
  return (
    <section className={styles.FooterItem}>
      <h4 className={styles.FooterItem_title}>{title}</h4>
      {subLinks.map(link => (
        <Link key={link} to="/" className={styles.FooterItem_sublinks}>
          {link}
        </Link>
      ))}
    </section>
  );
};

export default FooterItem;
