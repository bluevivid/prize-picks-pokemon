import {useState, useEffect} from 'react'
import { Pokemon } from './features/Pokemon'
import PokemonList from './features/PokemonList'

export default function App() {
  const [pokemon, setPokemon] = useState<string[]>(['bulbasaur']);
  const [inputText, setInputText] = useState<string>('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    // Add a duplicate of bulbasaur - notice there is no second request?
    setTimeout(() => {
      setPokemon((prev) => [...prev, 'bulbasaur'])
    }, 1500)

    // Add a pokemon that doesn't exist in the cache, will generate a network request
    setTimeout(() => {
      setPokemon((prev) => [...prev, 'pikachu'])
    }, 2000)
  }, [])

  return (
    <div className="App">
      <div>
        <button onClick={() => setPokemon((prev) => [...prev, 'bulbasaur'])}>
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

      <PokemonList input={inputText} />
    </div>
  )
}
