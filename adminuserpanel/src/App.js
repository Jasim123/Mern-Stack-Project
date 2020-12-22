import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/login';
import Profile from './pages/profileCreation';
import Users from './pages/users';

class App extends Component {
  render() {
    return (
      <div className="App">
  {/* <container>
    <h1>this is home page</h1>
  </container> */}
      <Router>
        {/* <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div> */}
<Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/Users" component={Users} />
</Switch>
      
        </Router>
              
      </div>
    );
  }
}

export default App;

