import React from "react";
import styled from 'styled-components'

const TitleH = styled.h1`
    text-align: center;
    margin-bottom: 5%;
`

export default function Favorite(){
    return (
        <div className="container">
            <TitleH>Favorite comments to save them!</TitleH>
        </div>
    )
}