import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: ['Pokemon'],
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => `pokemon/?offset=0&limit=1281`,
      providesTags: ['Pokemon']
    }),
    getPokemonByName: builder.query({
      query: (name : string) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi
