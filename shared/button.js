import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/globals';

export default function FlatButton({ text, onPress }) {
    return (

            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{ text }</Text>
                </View>
            </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
        width: '50%',
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15,
        textAlign: 'center'
    }
})