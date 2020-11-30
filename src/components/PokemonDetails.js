import React from 'react';
import './PokemonDetails.css';

function PokemonDetail({pokemon}){
    return(
        <div>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name + ' photo'} 
                className='pokemon-image' />
            <ul>
                <li key={pokemon.name}>Nome: {pokemon.name}</li>
                <li key={pokemon.height.toString()}>Altura: {pokemon.height}</li>
                <li key={pokemon.weight.toString()}>Peso: {pokemon.weight}</li>
                <li>Tipo:  
                {
                    pokemon.types.map((value) => {
                        return(
                            <ul className='pokemon-types-list'>
                                <li key={pokemon.id}>{value.type.name}</li>
                            </ul>
                        )
                    })
                }
                </li>
            </ul>
        </div>
    )
}

export default PokemonDetail;