import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { getViewGET } from '../../api/getView';
import useInertia from '../../hooks/useInertia';


export default function Logout() {
    const { iProps, setValues } = useInertia();

    const logout = async () => {
        const response = await getViewGET("logout")
        setValues(response.data);
    }

    return (
        <View style={styles.content}>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
})