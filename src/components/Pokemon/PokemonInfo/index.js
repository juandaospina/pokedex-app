import { Text, StyleSheet, View } from "react-native";

const PokemonInfo = ({pokemon}) => {

    const { type } = pokemon;

    return(
        <View style={styles.content}>
            <View style={styles.pill}>
                <Text style={styles.type}>{ type }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: "#00ffcb"
    },
    type: {
        textTransform: "capitalize",
        fontWeight: "bold"
    }
})

export default PokemonInfo; 