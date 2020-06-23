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
        headerStyle: { backgroundColor: '#eee', height: 80}
    }
});

export default AboutStack;
