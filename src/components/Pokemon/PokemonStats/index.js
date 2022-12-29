import { Text, StyleSheet, View } from "react-native";

const PokemonStats = ({ pokemon }) => {

    const { stats } = pokemon; 

    return(
        <View style={styles.content}>
            <Text style={styles.title}>Stats</Text>
            {stats?.map((item, index) => (
                <View key={index} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>{item.stat.name}</Text>
                    </View>
                    <Text>Barra</Text>
                </View>
            ))}
        </View>
    );
}

const styles  = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5
    },
    blockTitle: {
        width: "30%"
    },
    statName: {
        fontSize: 12,
        color: "#aeaeae"
    }
})

export default PokemonStats;