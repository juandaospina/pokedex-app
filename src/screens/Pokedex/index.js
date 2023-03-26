import React, { useCallback, useEffect, useState } from "react"
import { useFonts } from "expo-font";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { getAllPokemons, getPokemonsDetails } from '../../api/getPokemons';
import PokemonList from '../../containers/PokemonList';

SplashScreen.preventAutoHideAsync();

const Pokedex = () => {
  const [ pokemons, setPokemons ] = useState([]);
  const [ nextPagination, setNextPagination ] = useState(null);
  // const [ fontsLoaded ] = useFonts({
  //   'Poppins': require('../../assets/fonts/Poppins-Bold.ttf')
  // });

  // const onLayoutRootView = useCallback( async () => {
  //   if(fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded])

  // if(!fontsLoaded) return null;
  
  const loadPokemons = async () => {
    try {
      const response = await getAllPokemons(nextPagination);
      // console.log("[FILE_POKEDEX_RESPONSE_API]", response)
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

