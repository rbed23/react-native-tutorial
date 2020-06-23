import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import globalStyles from '../styles/globals';

export default function Home() {
    return (
        <View style = {globalStyles.container}>
            <Text style= {globalStyles.titleText}>Homes</Text>
            <Text style= {globalStyles.bodyText}>Homes</Text>
            <Text style= {styles.boldText}>Homes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily: 'nunitoBold',
        fontSize: 30
    }
})
