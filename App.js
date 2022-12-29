import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import Account from './src/screens/Account';
import Favorite from './src/screens/Favorites';
import Pokedex from './src/screens/Pokedex';
import TabNavigation from './src/components/Navigation/TabNavigation';


// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* <Stack.Navigator>
  <Stack.Screen name='Account' component={Account}/>
  <Stack.Screen name='Pokedex' component={Favorite}/>
  <Stack.Screen name='Favorites' component={Pokedex}/>
</Stack.Navigator> */}