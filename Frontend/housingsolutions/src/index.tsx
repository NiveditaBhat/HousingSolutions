import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faBars } from "@fortawesome/free-solid-svg-icons";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      {/*   <Route  path="/search" component={SearchProperties} />
      <Route  path="/property" component={PropertyDetails} />
      <Route  path="/book" component={BookProperty} />
      <Route  path="/login" component={UserLogin} />
      <Route  path="/singup" component={UserSignup} /> */}
    </div>
  </Router>
);

library.add(fab, faPhoneAlt, faBars);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
