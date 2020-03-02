import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./HomePage";

export default function Header(){
    return (
        <div className="header">
        <h1>Header</h1>
        <ul>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
            <li><Link to="/HomePage">Home</Link></li>
        </ul>
        </div>
    )
}