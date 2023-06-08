import { useGetPokemonByNameQuery } from '../services/pokemon'

export const Pokemon = ({ name, setName }: { name: string, setName: any }) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetPokemonByNameQuery(name)

  return (
    <div style={{ float: 'left', textAlign: 'center' }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <div>
            <img src={data.sprites.front_shiny} alt={data.species.name} onClick={()=>setName(name)} />
          </div>
          <div>
            <span className='ability'>Abilities: </span> 
            {data.abilities.map((ability: any) => (
              <span> {ability.ability.name} </span>
            ))}
          </div>
          <div>
            <span className='ability'>Types: </span> 
            {data.types.map((type: any) => (
              <span className='type'> {type.type.name} </span>
            ))}
          </div>
        </>
      ) : (
        'No Data'
      )}
    </div>
  )
}
