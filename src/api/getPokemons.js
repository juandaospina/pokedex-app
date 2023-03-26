import { API_URL } from "../utils/config";

export const getAllPokemons = async (payload) => {
  try {
    const url = `${API_URL}/pokemon?limit=30&offset=0`;
    const response = await fetch(payload || url);
    const result = await response.json();

    console.log("[RESULTS_GET_POKEMONS]", result);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

export async function getPokemonsDetails(url) {
  console.log("[GET_POKEMONS_DETAIL]", url);
  try {
    const response = await fetch(url);
    const data = await response.json();

    const pokemon = {
      id: data.id,
      name: data.name,
      type: data.types[0].type.name,
      order: data.order,
      image: data.sprites.other["official-artwork"].front_default,
    };

    return pokemon;
  } catch (error) {
    throw Error(error);
  }
}

export async function getPokemonById(id) {
  console.log("[GET_POKEMON_BY_ID]", id);
  try {
    const URL = `${API_URL}/pokemon/${id}`;
    const response = await fetch(URL);
    const result = await response.json();

    const pokemon = {
      id: result.id,
      name: result.name,
      height: result.height,
      weight: result.weight,
      type: result.types[0].type.name,
      order: result.order,
      image: result.sprites.other["official-artwork"].front_default,
      species: result.species,
      stats: result.stats,
    };
    return pokemon;
  } catch (error) {
    throw Error(error);
  }
}
