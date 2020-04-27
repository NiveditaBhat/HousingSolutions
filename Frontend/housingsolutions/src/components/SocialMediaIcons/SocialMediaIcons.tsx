import * as React from "react";
import styles from "./SocialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { socialMediaIcons } from "../../utils/data";
import classNames from "classnames";

interface SocialMediaIconsProps {
  extraClasses?: string[];
}

const SocialMediaIcons: React.FunctionComponent<SocialMediaIconsProps> = ({ extraClasses }) => {
  return (
    <section className={classNames(styles.SocialMediaLinks, extraClasses)}>
      {socialMediaIcons.map(icon => (
        <React.Fragment key={icon.type[1]}>
          <FontAwesomeIcon
            icon={icon.type as IconProp}
            size="2x"
            className={styles.SocialMediaLinks_item}
          />
        </React.Fragment>
      ))}
    </section>
  );
};

export default SocialMediaIcons;
