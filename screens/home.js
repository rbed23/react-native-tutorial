import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globals';
import Card from '../shared/card';

export default function Home( props ) {

    const [reviews, setReviews] = useState([
        { title: 'test1', rating: 5, body: 'lorm ipsum', id: '1'},
        { title: 'test2', rating: 4, body: 'lorm ipsum', id: '2'},
        { title: 'test3', rating: 3, body: 'lorm ipsum', id: '3'},
        { title: 'test4', rating: 2, body: 'lorm ipsum', id: '4'},
        { title: 'test5', rating: 1, body: 'lorm ipsum', id: '5'},
    ]);


    return (
        <View style = {globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('details', item)}>
                        <Card>
                            <Text style={globalStyles.bodyText}>{ item.title}</Text>
                            {/* <Text style={globalStyles.bodyText}>{ item.rating}</Text> */}
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily: 'nunitoBold',
        fontSize: 30
    }
})
