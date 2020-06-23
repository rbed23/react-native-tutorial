import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import globalStyles from '../styles/globals';

export default function Details() {
    return (
        <View style = {globalStyles.container}>
            <Text style= {globalStyles.titleText}>Details</Text>
            <Text style= {globalStyles.bodyText}>Details</Text>
            <Text style= {styles.boldText}>Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily: 'nunitoBold',
        fontSize: 30
    }
})