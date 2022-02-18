import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CpusPage from "./pages/CpusPage";
import ErrorPage from "./pages/ErrorPage";
import NtbsPage from "./pages/NtbsPage";
import OptionPage from "./pages/OptionPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class NotFound extends React.Component {
  render() {
    return <Redirect to="/" />;
  }
}

const routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />

    <Route path="/option" exact component={OptionPage} />
    <Route path="/notebooks" exact component={NtbsPage} />
    <Route path="/processors" exact component={CpusPage} />
    <Route path="/cart" exact component={CartPage} />
    <Route path="/about" exact component={AboutPage} />
    <Route path="/contact" exact component={ContactPage} />

    <Route path="/error/" exact component={ErrorPage} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
