import * as React from "react";
import styles from "./App.module.scss";
import HomePage from "../HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import SearchPage from "../SearchPage/SearchPage";

const App: React.FunctionComponent = () => {
  return (
    <main className={styles.MainWrapper}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
};

export default App;
