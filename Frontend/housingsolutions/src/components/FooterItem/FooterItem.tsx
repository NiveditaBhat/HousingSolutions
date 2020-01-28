import * as React from "react";
import styles from "./FooterItem.module.scss";
import { Link } from "react-router-dom";

interface IFooterItemProps {
  title: string;
  subLinks: Array<string>;
}

const FooterItem: React.FunctionComponent<IFooterItemProps> = ({
  title,
  subLinks,
}: IFooterItemProps) => {
  return (
    <section className={styles.FooterItem}>
      <h4 className={styles.FooterItem_title}>{title}</h4>
      {subLinks.map(link => (
        <Link to="/" className={styles.FooterItem_sublinks}>
          {link}
        </Link>
      ))}
    </section>
  );
};

export default FooterItem;
