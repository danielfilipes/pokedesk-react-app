import React from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';

function PokemonList({pokemons, pokemonClicked}){
    return(
        <div className='list-of-pokemons'>
            <ul>
                {
                    pokemons.map((value) => {
                        return(
                            <PokemonItem pokemon = {value} key = {value.url} pokemonClicked = {pokemonClicked}/>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default PokemonList;