import * as React from "react";
import styles from "./SocialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { socialMediaIcons } from "../../utils/data";

const SocialMediaIcons: React.FunctionComponent = () => {
  return (
    <section className={styles.SocialMediaLinks}>
      {socialMediaIcons.map(icon => (
        <FontAwesomeIcon
          icon={icon.type as IconProp}
          size="2x"
          className={styles.SocialMediaLinks_item}
        />
      ))}
    </section>
  );
};

export default SocialMediaIcons;
