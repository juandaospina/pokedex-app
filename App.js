import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"

import TabNavigation from "./src/components/Navigation/TabNavigation";
import PokemonDetails from "./src/screens/PokemonDetails";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home"
          component={TabNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="pokemon" 
          component={PokemonDetails} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Poppins"
//   },
// });

{/* <Stack.Navigator>
  <Stack.Screen name="Account" component={Account}/>
  <Stack.Screen name="Pokedex" component={Favorite}/>
  <Stack.Screen name="Favorites" component={Pokedex}/>
</Stack.Navigator> */}