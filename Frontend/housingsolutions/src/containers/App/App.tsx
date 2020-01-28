import * as React from "react";
import styles from "./App.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
    <main className={styles.MainWrapper}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
};

export default App;
