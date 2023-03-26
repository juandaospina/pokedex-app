import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Account from '../../../screens/Account';
import Favorite from '../../../screens/Favorites';
import Pokedex from '../../../screens/Pokedex';

// Esto es lo requerido para crear un menu de navegación mobile, y con los header de cada screen

const Tab = createBottomTabNavigator();

const renderPokedexImage = () => {
    return(
        <Image 
            source={require('../../../assets/pokeball.png')}
            style={{ width: 65, height: 65, marginTop: -30 }}
        />
    )
}

const TabNavigation = () => {
    return(
        <Tab.Navigator initialRouteName='Pokedex'>
            <Tab.Screen  
                name='Favorites' 
                component={Favorite} 
                options={{
                    title: 'Favoritos',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='heart' color={color} size={size} /> 
                    ),
                }}
            />

            <Tab.Screen 
                name='Pokedex' 
                component={Pokedex}
                options={{
                    title: "",
                    headerTitleAlign: 'center',
                    tabBarIcon: () => renderPokedexImage(),
                    headerTitle: "Pokedex",
                }} 
            />

            <Tab.Screen 
                name='Account' 
                component={Account} 
                options={{
                    title: 'Mi cuenta',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='user' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;