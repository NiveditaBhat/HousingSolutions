import * as React from "react";
import styles from "./SocialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcons: React.FunctionComponent = () => {
  return (
    <section className={styles.SocialMediaLinks}>
      <FontAwesomeIcon
        icon={["fab", "facebook"]}
        size="2x"
        className={styles.SocialMediaLinks_item}
      />
      <FontAwesomeIcon
        icon={["fab", "twitter"]}
        size="2x"
        className={styles.SocialMediaLinks_item}
      />
      <FontAwesomeIcon
        icon={["fab", "google-plus"]}
        size="2x"
        className={styles.SocialMediaLinks_item}
      />
    </section>
  );
};

export default SocialMediaIcons;
