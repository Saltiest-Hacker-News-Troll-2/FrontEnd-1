import React from "react";
import styled from 'styled-components'

const HomePageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CharacterCard = props => {
    return (
        <HomePageDiv className = "HomePageCard" key>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        </HomePageDiv>
    )
}
export default CharacterCard;