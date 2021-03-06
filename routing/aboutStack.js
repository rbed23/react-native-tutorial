import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    about: {
        screen: About,
        navigationOptions: (props) => {
            return {
                headerTitle: () => 
                <Header 
                    navigation={props.navigation}
                    title='About GamerZone'
                />,
            }
        },
    },         
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default AboutStack;
