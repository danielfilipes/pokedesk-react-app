import React, {useState} from 'react';
import './PokemonSearch.css';

function PokemonSearch({setPokemons, getPokemon, getPokemons, setPokemon}) {

    const [inputText, setInputText] = useState('');

    const btnSearchClickedHandler = () => {
        getPokemon('pokemon/' + inputText);
        setPokemons([]);
    }

    const inputSearchChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    const btnClearClickedHandler = () => {
        if(inputText !== ''){
        setInputText('');
        getPokemons();
        setPokemon(false);
        }
    }

    return (
        <div className='search-content'>
            <input type='text' value={inputText} onChange={inputSearchChangeHandler} />
            <button onClick={btnSearchClickedHandler}>Pesquisar</button>
            <button onClick={btnClearClickedHandler}>Limpar</button>
        </div>
    )
}

export default PokemonSearch
