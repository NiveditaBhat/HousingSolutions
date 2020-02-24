import * as React from "react";
import styles from "./Loader.module.scss";
import loader from "../../static/images/loader.gif";

interface IconProps {}

const Loader: React.FunctionComponent<IconProps> = () => {
  return (
    <section className={styles.Loader}>
      <img src={loader} alt="loader" className={styles.Loader_img} />
    </section>
  );
};

export default Loader;
