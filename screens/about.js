import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/globals';

export default function About() {
    return (
        <View style = {globalStyles.container}>
            <Text style= {globalStyles.titleText}>About</Text>
            <Text style= {globalStyles.bodyText}>About</Text>
            <Text style= {styles.boldText}>About</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily: 'nunitoBold',
        fontSize: 30
    }
})