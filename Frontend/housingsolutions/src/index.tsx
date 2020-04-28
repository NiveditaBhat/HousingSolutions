import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App/App";
import "./utils/faIcons";
import { client } from "../src/utils/useClient";
import { ApolloProvider } from "@apollo/react-hooks";
import store from "./utils/configureStore";
import { Provider } from "react-redux";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
