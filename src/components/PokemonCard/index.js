import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableWithoutFeedback 
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { getColorByType } from '../../utils/getColorByType';


const PokemonCard = ({pokemon}) => {
  const navigation = useNavigation();
  const color = getColorByType(pokemon.type);
  /// console.log("[POKEMONNNNNN]", pokemon.type)

  const containerStyle = [{backgroundColor: color, ...styles.bgStyle}]

  const goToPokemonItem = () => {
    navigation.navigate('pokemon', { id: pokemon.id });
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemonItem}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={containerStyle}>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Text style={styles.number}>{pokemon.id}</Text>
              <Image source={{uri: pokemon.image}} style={styles.image} />
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      top: 2,
      height: 130,
      borderColor: "#000f3d"
    },
    spacing: {
      flex: 1,
      padding: 5
    },
    bgStyle: {
      flex: 1,
      borderColor: "#fff",
      borderRadius: 15,
      opacity: 0.8,
    },
    number: {
      position: "absolute",
      right: 10,
      top:10,
      color: "#000",
      fontSize: 11
    },
    name: {
      color: "#000",
      fontWeight: "bold",
      fontSize: 18,
      padding: 15,
      textTransform: "capitalize"
    },
    image: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: 90,
      height: 90,
      flex: 1
    }
})

export default PokemonCard;