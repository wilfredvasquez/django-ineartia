import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Textarea from 'react-native-textarea';
import { useFormik } from "formik";
import * as Yup from "yup";
import { getViewPOST } from '../../api/getView';
import useInertia from '../../hooks/useInertia';
import { useNavigation } from '@react-navigation/native';

export default function NoteForm(props) {
    const { note, url, title } = props;
    const [error, setError] = useState("");
    const { setValues } = useInertia();
    const navigation = useNavigation();


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (values) => {
            setError("")
            const { excerpt, content } = values;
            const data = {
                "excerpt" : excerpt,
                "content": content
            }
            getViewPOST(url, data)
            .then(
                (response) => { 
                    setValues(response.data);
                    navigation.navigate("NoteList")
                }
            )
            .catch((error) => {
                console.log(error)
                setError("Error in form");
            })
        }
    })

    const resetValues = () => {
        formik.setFieldValue('content', "");
        formik.setFieldValue('excerpt', "");
    }

    useEffect(() => {
        if(note){
            formik.setFieldValue('content', note.content);
            formik.setFieldValue('excerpt', note.excerpt);
        }
    }, [note])

    return (
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.excerpt}
                onChangeText={(text) => formik.setFieldValue('excerpt', text)}
            />

            <Textarea
                maxLength={250}
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.content}
                onChangeText={(text) => formik.setFieldValue('content', text)}
            />
            {
                !note ? 
                (
                    <View style={styles.button}>
                        <Button
                            title="Create"
                            onPress={formik.handleSubmit}
                        />
                    </View>
                ) :
                (
                    <>
                        <View style={styles.button}>
                            <Button title="Update" onPress={formik.handleSubmit} />
                        </View>
                        <View style={styles.button}>
                            <Button color="#ff5c5c" title="Reset" onPress={resetValues} />
                        </View>
                    </>
                )
            }
            
            <Text style={styles.error} >{formik.errors.excerpt}</Text>
            <Text style={styles.error} >{formik.errors.content}</Text>
            <Text style={styles.error} >{error}</Text>
        </View>
    )
}

function initialValues () {
    return {
        excerpt: "",
        content: ""
    }
}

function validationSchema() {
    return {
        excerpt: Yup.string().required("Title required"),
        content: Yup.string().required("Content required")
    }
}


const styles = StyleSheet.create({
    title:{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 15
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10
      },
      textarea: {
        textAlignVertical: 'top',
        height: 170,
        fontSize: 14,
        color: '#000',
      },
    error: {
        textAlign: "center",
        color: "#f00",
    },
    content: {
        paddingHorizontal: 20,
    },
    button:{
        marginTop: 10
    },
})