import * as React from "react";
import styles from "./App.module.scss";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
    <section className={styles.main}>
      <h1>Main</h1>
      <p>hello</p>
    </section>
  );
};

export default App;
