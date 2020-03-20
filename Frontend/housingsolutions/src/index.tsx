import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { client } from "../src/utils/useClient";
import { ApolloProvider } from "@apollo/react-hooks";
import store from "./utils/configureStore";
import { Provider } from "react-redux";

import {
  faPhoneAlt,
  faBars,
  faWindowClose,
  faBackward,
  faChevronDown,
  faChevronUp,
  faSearch,
  faTimes,
  faBed,
  faBath,
  faMapMarkerAlt,
  faChair,
  faHome,
  faCheckSquare,
  faPlus,
  faPiggyBank,
  faCalendarPlus,
  faHandshake,
  faUserClock,
  faUsers,
  faUserCircle,
  faCity,
  faEnvelope,
  faAddressBook,
  faCalendarWeek,
  faMoneyBill,
  faImage,
  faMapMarkedAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faPhoneAlt,
  faBars,
  faWindowClose,
  faBackward,
  faChevronDown,
  faChevronUp,
  faSearch,
  faTimes,
  faBed,
  faBath,
  faMapMarkerAlt,
  faChair,
  faPlus,
  faCheckSquare,
  faHome,
  faPiggyBank,
  faCalendarPlus,
  faHandshake,
  faUserClock,
  faUsers,
  faCity,
  faEnvelope,
  faAddressBook,
  faUserCircle,
  faCalendarWeek,
  faMoneyBill,
  faImage,
  faMapMarkedAlt,
  faChevronRight
);

ReactDOM.render(
  <Router>
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
