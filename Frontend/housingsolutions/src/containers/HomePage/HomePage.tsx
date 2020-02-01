import * as React from "react";
import styles from "./HomePage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import IntroBlock from "../../components/IntroBlock/IntroBlock";

const HomePage: React.FunctionComponent = () => {
  return (
    <section className={styles.Home}>
      <Header />
      <section className={styles.Home_container}>
        <IntroBlock />
      </section>
      <Footer />
    </section>
  );
};

export default HomePage;
