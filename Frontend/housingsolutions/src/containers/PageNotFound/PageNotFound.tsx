import * as React from "react";
import styles from "./PageNotFound.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";

const PageNotFound: React.FunctionComponent = () => {
  return (
    <section className={styles.NotFound}>
      <Header />
      <section className={styles.NotFound_titleBlock}>
        <h1>
          <span className={styles.NotFound_title}>404</span>
        </h1>
        <p className={styles.NotFound_subTitle}>
          Oops, The page you are looking for can't be found !
        </p>
        <Link to="/" className={`${styles.NotFound_subTitle} ${styles.NotFound_subTitle___link}`}>
          <FontAwesomeIcon icon="backward" />
          <span className={styles.NoFound_linkText}>Return To Home Page</span>
        </Link>
      </section>
    </section>
  );
};

export default PageNotFound;
