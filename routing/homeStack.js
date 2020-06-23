import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Header from '../shared/header';
import React from 'react';

const screens = {
    home: {
        screen: Home,
        navigationOptions: (props) => {
            return {
                headerTitle: ()=> 
                <Header 
                    navigation={props.navigation}
                    title='Game Zone'
                />,
            }
        },
    },
    details: {
        screen: Details,
        navigationOptions: {
            title: 'Game Review Details',

        },            
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default HomeStack;
