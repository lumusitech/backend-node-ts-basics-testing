import { httpClient as http } from '../plugins'

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  try {
    const pokemon = await http.get(url)
    return pokemon.name
  } catch (error) {
    throw `pokemon not found with id ${id}`
  }

  // const pokemon = await http.get(url)

  // const resp = await fetch( url );
  // const pokemon = await resp.json();

  // throw new Error('Pokemon no existe');

  // return pokemon.name

  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );
}
