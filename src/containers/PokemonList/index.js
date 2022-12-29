import { FlatList, StyleSheet, ActivityIndicator, Platform } from "react-native";
import PokemonCard from "../../components/PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {

    const loadMore = () => {
        loadPokemons();
    }

    // console.log(Platform.OS); Identifica el sistema operativo desde el cual se esta interactuando
    // con esto podríamos crear estilos y configuraciones mas personalizadas para cada OS

    return(
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            listKey="Pokemons-List"
            renderItem={({item}) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator 
                        size="large"
                        style={styles.spinner}
                        // color=""
                    />
                )
            }
        />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})

export default PokemonList;