import { useGetPokemonByNameQuery } from '../services/pokemon'

export const Pokemon = ({ name }: { name: string }) => {
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
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </div>
          <div>
            Abilities: 
            {data.abilities.map((ability: any) => (
              <span className='ability'> {ability.ability.name} </span>
            ))}
          </div>
          <div>
            Types: 
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
