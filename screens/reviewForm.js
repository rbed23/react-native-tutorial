import React from 'react';
import { TextInput, View, Text, Button, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/globals';
import FlatButton from '../shared/button';

const validationScheme = yup.object().shape({
    title: yup
        .string()
        .required()
        .label('Title')
        .min(5, 'Please enter a title >5 chars'),
    body: yup
        .string()
        .required()
        .label('Description')
        .min(10, 'Please provide a more detailed description of the review'),
    rating: yup
        .number()
        .required()
        .label('Rating')
        .positive()
        .integer("Enter a value between 1 and 5")
        .moreThan(0, 'Enter a value of 1-5')
        .lessThan(6, 'Enter a value of 1-5'),
});

export default function ReviewForm({ addReview }) {
    return (
            <View style={globalStyles.container}>

                <Formik
                    initialValues={{
                        title: '',
                        body: '',
                        rating: '',
                    }}
                    validationSchema={validationScheme}
                    onSubmit={(values, actions) => {
                        addReview(values);
                        actions.resetForm();
                    }}
                >
                
                    {(formikProps) => (
                        <View>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder="Review Title"
                                onChangeText={formikProps.handleChange('title')}
                                value={formikProps.values.title}
                                onBlur={formikProps.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>
                                { formikProps.touched.title && formikProps.errors.title }
                            </Text>

                            <TextInput
                                multiline minHeight={100}
                                style={globalStyles.input}
                                placeholder="Review Description"
                                onChangeText={formikProps.handleChange('body')}
                                value={formikProps.values.body}
                                onBlur={formikProps.handleBlur('body')}
                            />
                            <Text style={globalStyles.errorText}>
                                { formikProps.touched.body && formikProps.errors.body }
                            </Text>

                            <TextInput 
                                style={globalStyles.input}
                                placeholder="Give it a Rating (1-5)"
                                onChangeText={formikProps.handleChange('rating')}
                                value={formikProps.values.rating}
                                keyboardType='numeric'
                                onBlur={formikProps.handleBlur('rating')}
                            />
                            <Text style={globalStyles.errorText}>
                                { formikProps.touched.rating && formikProps.errors.rating }
                            </Text>

                            <FlatButton 
                                text='Submit' 
                                onPress={formikProps.handleSubmit}
                            />
                        </View>
                    )}

                </Formik>
            </View>

    )
}