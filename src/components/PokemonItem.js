import React from 'react';
import './PokemonItem.css';

function PokemonItem({pokemon, pokemonClicked}){

    const pokemonClickedHandle = () => {
        pokemonClicked(pokemon.url);
    }

    return(
        <li key={pokemon.url} onClick = {pokemonClickedHandle}>{pokemon.name}</li>
    )
}

export default PokemonItem;