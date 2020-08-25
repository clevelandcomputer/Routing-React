import React, { Component } from "react";
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
//Import the Navigation component
import Navigation from "./components/navigation/Navigation";
import Page404 from './components/page404/Page404';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* render the Navigation component */}
        <Navigation />
        <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="eric" />}
        />
         <Route
          exact
          path="/welcome"
          render={(props) => <Welcome {...props} name="eric" />}
        />
        
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />

        
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
        />
        <Route
          component={Page404}
        />
        </Switch>
      </div>
    );
  }
}
export default App;