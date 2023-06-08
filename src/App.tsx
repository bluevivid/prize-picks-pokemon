import {useState, useEffect} from 'react'
import { Pokemon } from './features/Pokemon'
import PokemonList from './features/PokemonList'
import './styles.css'

export default function App() {
  const [pokemon, setPokemon] = useState<string[]>(['bulbasaur']);
  const [inputText, setInputText] = useState<string>('');

  // Should add a debounce, but punting on that for this exercise
  // Handles the search text input, veeery basic for this implementation lol
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.toLowerCase());
  };
  
  const setName = (name: string) => setPokemon( prev => {
    // Just doing an inner function to check if it is already 
    // in the array, if so, just bring it to the front
    const filterPrev = prev.filter(el => el !== name)
    return [name, ...filterPrev]
  })

  return (
    <div className="App">
      <h1>Pokemon Pokedex</h1>
      <div className="Search">
        <div className="search">
          <input onChange={inputHandler} />
        </div>
        <PokemonList input={inputText} setName={setName} />
      </div>
      <div className="PokemonCards">
        {pokemon.map((name, index) => (
          <Pokemon key={index} name={name} setName={setName} />
        ))}
      </div>
    </div>
  )
}
