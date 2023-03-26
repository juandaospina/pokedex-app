import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getPokemonById } from "../../api/getPokemons";
import PokemonHeader from "../../components/Pokemon/Header";
// import PokemonInfo from '../../components/Pokemon/PokemonInfo';
import PokemonStats from "../../components/Pokemon/PokemonStats";

const PokemonDetails = (props) => {
  const { route } = props;
  const [pokemon, setPokemon] = useState({});
  console.log("[DETAILS_POKEMON]", pokemon)

  useEffect(() => {
    (async () => {
      try {
        const res = await getPokemonById(route.params.id);
        setPokemon(res);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [route.params]);

  return (
    <ScrollView>
      <PokemonHeader pokemon={pokemon} />
      {/* <PokemonInfo
          pokemon={pokemon}
        /> */}
      <PokemonStats pokemon={pokemon} />
    </ScrollView>
  );
};

export default PokemonDetails;
