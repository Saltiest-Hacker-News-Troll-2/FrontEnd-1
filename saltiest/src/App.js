import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Login />
     <h1>ITS WORKING!!!</h1>
    </div>
  );
}

export default App;
