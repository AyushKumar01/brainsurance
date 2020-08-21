import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import GetAQuote from "./pages/GetAQuote";
import FinalQuote from "./pages/FinalQuote";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/get-a-quote" component={GetAQuote} exact />
        <Route path="/final-quote" component={FinalQuote} />

        <Route component={NotFound} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
