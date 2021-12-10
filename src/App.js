import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Beranda from "./Komposisi/Beranda";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Beranda />
        {/* <div>
          <Switch></Switch>
        </div> */}
      </Router>
    );
  }
}
export default App;
