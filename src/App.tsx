import {useState, useEffect} from 'react'
import { Pokemon } from './features/Pokemon'
import PokemonList from './features/PokemonList'

export default function App() {
  const [pokemon, setPokemon] = useState<string[]>(['bulbasaur']);
  const [inputText, setInputText] = useState<string>('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.toLowerCase());
  };
  
  const setName = (name: string) => setPokemon( prev => {
    // Just doing an inner function to check if it is already 
    // in the array, if so, just bring it to the front
    const filterPrev = prev.filter(el => el !== name)
    return [...filterPrev, name]
  })

  return (
    <div className="App">
      <div>
        <button onClick={() => setName( 'bulbasaur')}>
          Add bulbasaur
        </button>
      </div>
      {pokemon.map((name, index) => (
        <Pokemon key={index} name={name} />
      ))}
      
      <h1>React Search</h1>
      <div className="search">
        <input onChange={inputHandler} />
      </div>

      <PokemonList input={inputText} setName={setName} />
    </div>
  )
}
