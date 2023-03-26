import { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Image 
} from "react-native";
import { getColorByType } from "../../../utils/getColorByType";

const PokemonHeader = ({ pokemon }) => {
  const { name, order, image, type } = pokemon;
  const color = getColorByType(type);

  const containerStyles = [{ backgroundColor: color, ...styles.bgStyles}]

  return (
    <>
      <View style={containerStyles}/>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bgStyles: {
    width: "100%",
    height: 390,
    position: "absolute",
    // backgroundColor: backgroundType,
    // borderBottomRightRadius: 300,
    // borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize",
  },
  order: {
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

export default PokemonHeader;
