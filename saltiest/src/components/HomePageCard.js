import React from "react";
import styled from 'styled-components';

const HomePageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid black;
width: 50%;
margin-left: 25%;
box-shadow: 10px 10px grey;
margin-bottom: 2%;
`

const CharacterCard = props => {
    
    return (
        
        <HomePageDiv className = "HomePageCard" key>
        <button>Favorite</button>
        <h2>Username: {props.name}</h2>
        <p>Rating: {props.rating}</p>
        <p>Comment: {props.comment}</p>
        </HomePageDiv>
    )
}
export default CharacterCard;