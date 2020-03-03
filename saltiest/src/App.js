import React from 'react';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  
  return (
  <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route path="/Login">
      <Login />
      </Route>
      <Route path="/Signup">
      <Signup />
      </Route>
      <Route path="/HomePage">
      <HomePage />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
