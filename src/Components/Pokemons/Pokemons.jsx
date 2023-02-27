import React from "react";
import PokemonJson from "../../../pokemons.json";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemons = ({ type }) => {
    let pokemonsByType = PokemonJson[type];
    return (
        <div>
            {
            pokemonsByType.map((element) => {
                return (
                    <PokemonCard element={element} key={element.id}/>
                );
            })}
        </div>
    );
};

export default Pokemons;