import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetails from '../../../screens/PokemonDetails';

const Stack = createNativeStackNavigator();

const ScreensNavigation = () => {
    return(
        <Stack.Screen 
            name='pokemon'
            component={PokemonDetails}
        />
    );
}

export default ScreensNavigation;