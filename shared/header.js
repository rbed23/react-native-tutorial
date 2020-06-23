import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(props) {

    const pressHandler = () => {
        props.navigation.openDrawer();
    }

    return (

        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons
                name='menu'
                size={28}
                style={styles.icon}
                onPress={ pressHandler }
            />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{ props.title }</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '200%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerImage: {
        marginHorizontal: 10,
        width: 26,
        height: 26,
    },
    headerTitle: {
        flexDirection: 'row'
    }
});