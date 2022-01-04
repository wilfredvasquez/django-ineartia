import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useFormik } from "formik";
import * as Yup from "yup";
import { getViewPOST } from '../../api/getView';
import useInertia from '../../hooks/useInertia';

export default function LoginForm() {
    const [error, setError] = useState("");
    const { setValues } = useInertia();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (values) => {
            setError("")
            const { username, password } = values;
            const data = {
                "username" : username,
                "password": password
            }
            getViewPOST("login", data)
            .then(
                (response) => { 
                    setValues(response.data);
                }
            )
            .catch((error) => {
                console.log(error)
                setError("Error in Login");
            })
        }
    })

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput
                placeholder="Username"
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            
            <Button
                title="Sign In"
                onPress={formik.handleSubmit}
            />
            <Text style={styles.error} >{formik.errors.username}</Text>
            <Text style={styles.error} >{formik.errors.password}</Text>
            <Text style={styles.error} >{error}</Text>
        </View>
    )
}

function initialValues () {
    return {
        username: "",
        password: ""
    }
}

function validationSchema() {
    return {
        username: Yup.string().required("Username required"),
        password: Yup.string().required("Password required")
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: "center",
        color: "#f00",
    },
    content: {
        paddingHorizontal: 20,
    },
})