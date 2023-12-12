import { getPokemonById } from '../../src/js-foundation/06-promises'

describe('js-foundation/06-promises - getPokemonById', () => {
  it('should return a pokemon name', async () => {
    const pokemonId = 1
    const pokemonName = await getPokemonById(pokemonId)
    expect(pokemonName).toBe('bulbasaur')
  })

  it('should return an error if pokemon does not exist', async () => {
    const pokemonId = 10000000
    try {
      await getPokemonById(pokemonId)
      // the next expect run the catch
      expect(true).toBeFalsy()
    } catch (error) {
      expect(error).toBe(`pokemon not found with id ${pokemonId}`)
    }
  })
})
