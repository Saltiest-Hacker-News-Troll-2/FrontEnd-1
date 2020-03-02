import React from 'react';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  
  return (
  <Router>
    <div className="App">
    <Header />
    <Route path="/HomePage" exact component={HomePage}/>
    </div>
    </Router>
  );
}

export default App;
