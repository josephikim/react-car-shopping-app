import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import {MyNavbar} from "./components/MyNavbar";

const App = () => (
  <Router>
    <div>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
