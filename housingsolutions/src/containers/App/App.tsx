import * as React from "react";
import styles from "./App.module.scss";
import HomePage from "../HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import SearchPage from "../SearchPage/SearchPage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { withRouter } from "react-router-dom";
import { Location } from "history";
import PropertyDetailPage from "../PropertyDetailPage/PropertyDetailPage";

interface AppProps {
  location: Location;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <section className={styles.App}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/property/:id" component={PropertyDetailPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </main>
      <Footer />
    </section>
  );
};

export default withRouter(App);
