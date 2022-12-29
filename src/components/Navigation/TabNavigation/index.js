import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Account from '../../../screens/Account';
import Favorite from '../../../screens/Favorites';
import Pokedex from '../../../screens/Pokedex';

const Tab = createBottomTabNavigator();

const renderPokedexImage = () => {
    return(
        <Image 
            source={require('../../../assets/pokeball.png')}
            style={{ width: 75, height: 75, marginTop: -30 }}
        />
    )
}

const TabNavigation = () => {
    return(
        <Tab.Navigator>
            
            <Tab.Screen  
                name='Favorites' 
                component={Favorite} 
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='heart' color={color} size={size} /> 
                    )
                }}
            />

            <Tab.Screen 
                name='Pokedex' 
                component={Pokedex}
                options={{
                    title: "",
                    tabBarIcon: () => renderPokedexImage()
                }} 
            />

            <Tab.Screen 
                name='Account' 
                component={Account} 
                options={{
                    title: 'Mi cuenta',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='user' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;