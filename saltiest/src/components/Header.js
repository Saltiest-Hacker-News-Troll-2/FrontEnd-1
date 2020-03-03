import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./HomePage";
import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;
    background-color: #FA7921;
`

const HeaderUL = styled.ul`
    display: flex;
    text-decoration: none;
    flex-basis: 75%;
    justify-content: space-around;
`

const CuteButton = styled.button`
    background-color: #FDE74C;
    color: #5BC0EB;
    width: 120px;
    font-size: 1.4rem;
`

const FlexTest = styled.div`
    display: flex;
    flex-basis: 10%;
`

const StyledH1 = styled.h1`
    color: white;
    margin-left: 10%;
`

export default function Header(){
    return (
        <HeaderDiv className="header">
            <div className="headerText">
                <StyledH1>TrollFindr</StyledH1>
            </div>
        <HeaderUL>
            <CuteButton><Link to="/Login">Login</Link></CuteButton>
            <CuteButton><Link to="/Signup">Signup</Link></CuteButton>
            <CuteButton><Link to="/HomePage">Home</Link></CuteButton>
        </HeaderUL>
        </HeaderDiv>
    )
}