import {data} from "../data/pokemonData"

export default function PokemonList({ input, setName }: { input: string, setName: any }) {

  //create a new array by filtering the original array
  const filteredData = data.results.filter((el) => {
    return input === '' ? el : el.name.toLowerCase().includes(input)
  })

  return (
    <ul>
    {filteredData.map((item) => (
        <li key={item.url} onClick={()=>setName(item.name)}>{item.name}</li>
    ))}
    </ul>
  )
}

