import React from "react";

const PokemonCard = ({ element }) => {
    return(
        <div>
            <h1>{element.name}</h1>
            <h3>Power Level: {element.powerLevel}</h3>
            <h3>Agressive: {element.agressive ? "Is aggressive" : "Is NOT aggressive" }</h3>
            <img src={element.avatar} alt="Pokemon Name" />
        </div>
    )
};

export default PokemonCard;
