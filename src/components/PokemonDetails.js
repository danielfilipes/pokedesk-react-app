import React from 'react';
import './PokemonDetails.css';

function PokemonDetail({pokemon}){
    return(
        <div>
            <div className='div-pokemon-image'>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name + ' photo'} 
                    className='pokemon-image' />
            </div>
            
            <ul className='pokemon-detail-list'>
                <li key={pokemon.name} className='pokemon-name'>{pokemon.name}</li>

                <div className='pokemon-detail-content'>
                    <li key={pokemon.height.toString()}>Altura: {pokemon.height}</li>
                    <li key={pokemon.weight.toString()}>Peso: {pokemon.weight}</li>
                    <li>Tipo:  
                        {
                            pokemon.types.map((value) => {
                                return(
                                    <ul className='pokemon-types-list'>
                                        <li key={pokemon.id} className='pokemon-types-list-item'>{value.type.name}</li>
                                    </ul>
                                )
                            })
                        }
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default PokemonDetail;