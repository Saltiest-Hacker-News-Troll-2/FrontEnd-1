import React from "react";

const CharacterCard = props => {
    return (
        <div className = "HomePageCard" key>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        </div>
    )
}
export default CharacterCard;