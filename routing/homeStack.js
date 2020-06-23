import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import Details from '../screens/details';

const screens = {
    home: {
        screen: Home
    },
    details: {
        screen: Details
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);