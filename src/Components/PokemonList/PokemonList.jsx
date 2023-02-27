import React from "react";
import Pokemons from "../Pokemons/Pokemons";

const PokemonList = () => {
    let type = "electric";
    return (
        <div>
            <Pokemons type={type} />
        </div>
    );
};

export default PokemonList;
