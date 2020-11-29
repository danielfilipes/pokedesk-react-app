import React from 'react';

function PokemonDetail({pokemon}){
    return(
        <div>
            <ul>
                <li>Nome: {pokemon.name}</li>
                <li>Altura: {pokemon.height}</li>
                <li>Peso: {pokemon.weight}</li>
                <li>Tipo:  
                {
                    pokemon.types.map((value) => {
                        return(
                            <ul>
                                <li>{value.type.name}</li>
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