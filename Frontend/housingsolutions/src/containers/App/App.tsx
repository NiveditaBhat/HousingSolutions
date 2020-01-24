import * as React from "react";
import styles from "./App.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../HomePage/HomePage";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
    <main className={styles.MainWrapper}>
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
};

export default App;
