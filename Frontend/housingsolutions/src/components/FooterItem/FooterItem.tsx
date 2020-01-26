import * as React from "react";
import styles from "./FooterItem.module.scss";

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
        <a className={styles.FooterItem_sublinks} href="/">
          {link}
        </a>
      ))}
    </section>
  );
};

export default FooterItem;
