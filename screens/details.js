import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, globalImages } from '../styles/globals';
import Card from '../shared/card'; 

export default function Details(props) {

    const rating = props.navigation.getParam('rating')

    return (
        <View style = {globalStyles.container}>
            <Card>
                <Text>{ props.navigation.getParam('title') }</Text>
                <Text>{ props.navigation.getParam('body') }</Text>
                <View style={styles.rating}>
                    <Text>Game Zone Rating:
                        <Image source={globalImages.ratings[rating]}/>
                    </Text>
                </View>
            </Card>
        </View>
    );
}


const styles=StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        margin: 16,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    }
})