import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetails';
import PokemonSearch from './components/PokemonSearch';

import api from "./services/api";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [previousUrl, setPreviousUrl] = useState('');
  const [nextUrl, setNextUrl] = useState('');
  const [pokemon, setPokemon] = useState(false);

  const getPokemons = (url = 'pokemon?limit=10&offset=0') => {
    api.get(url)
      .then((response) => {
        let data = response.data;
        console.log(data);
        setPokemons(data.results);
        setPreviousUrl(data.previous != null ? data.previous.slice(26) : '');
        setNextUrl(data.next != null ? data.next.slice(26) : '');
      })
      .catch((error) => {
        console.error('Ops! Aconteceu um erro!\n' + error);
      })
  }

  useEffect( () => {
      getPokemons()
    }, [setPokemons]
  );

  const btnPreviousHandler = () => {
    if(previousUrl === ''){

    }
    else{
      getPokemons(previousUrl);
    }
  };

  const btnNextHandler = () => {
    if(nextUrl === ''){
      
    }
    else{
      getPokemons(nextUrl);
    } 
  };

  const getPokemon = (url) => {
    api.get(url)
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error('Ops! Não foi possível encontrar mais informaćões sobre este pokemon.\n'
          + error);
      })
  }

  return (
    <div className='app'>
      <h1 className='title'>Pokedex</h1>
      
      <PokemonSearch 
        className='search-content' 
        setPokemons={setPokemons} 
        getPokemon={getPokemon} 
        getPokemons={getPokemons}
        setPokemon={setPokemon}
      />

      <div className='content-app'>
        <div className='left-side'>
          <div className='list'>
            <PokemonList pokemons={pokemons} pokemonClicked = {getPokemon} />
          </div>
        </div>

        <div className='rigth-side'>
          {pokemon === false 
            ? <p>Escolha um pokemon para visualizar suas informações.</p> 
            : <PokemonDetail pokemon = {pokemon} />}
        </div>
      </div>        

      <div className='div-buttons'>
        <button onClick={() => btnPreviousHandler()} className='buttons'>{"<<"}</button>
        <button onClick={() => btnNextHandler()} className='buttons'>{">>"}</button>
      </div>
    </div>     
  );
}

export default App;
