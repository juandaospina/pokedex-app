import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { getAllPokemons } from '../../api/getPokemons';
import { getPokemonsDetails } from '../../api/getPokemons';
import PokemonList from '../../containers/PokemonList';


const Pokedex = () => {

  const [ pokemons, setPokemons ] = useState([]);
  const [ nextPagination, setNextPagination ] = useState(null);
  
  const loadPokemons = async () => {
    try {
      const response = await getAllPokemons(nextPagination);
      setNextPagination(response.next);
      const pokemonsList = [];

      for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonsDetails(pokemon.url)
          pokemonsList.push(pokemonDetails);
      }
      setPokemons([...pokemons, ...pokemonsList])
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, [])


  return (
    <View>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
        isNext={nextPagination}
      />
    </View>
  )
}

export default Pokedex;

