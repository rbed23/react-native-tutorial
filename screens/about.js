import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globals';

export default function About() {
    return (
        <View style = {globalStyles.container}>
            <Text style= {globalStyles.titleText}>About</Text>
            <Text style= {globalStyles.bodyText}>About</Text>
        </View>
    );
}
