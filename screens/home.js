import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/globals';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home( props ) {

    const [reviews, setReviews] = useState([
        { title: 'test1', rating: 5, body: 'lorm ipsum', key: '1'},
        { title: 'test2', rating: 4, body: 'lorm ipsum', key: '2'},
        { title: 'test3', rating: 3, body: 'lorm ipsum', key: '3'},
        { title: 'test4', rating: 2, body: 'lorm ipsum', key: '4'},
        { title: 'test5', rating: 1, body: 'lorm ipsum', key: '5'},
    ]);

    const [modal, setModal] = useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModal(false);
    };


    return (
        <View style = {globalStyles.container}>

            <Modal visible={modal} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={
                            {... styles.modalToggle, ...styles.modalClose}
                        }
                        onPress={() => setModal(false)}
                    />
                    <ReviewForm addReview={addReview}/>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModal(true)}
            />

            <FlatList
                data={reviews}
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('details', item)}>
                        <Card>
                            <Text style={globalStyles.bodyText}>{ item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    modalToggle: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})