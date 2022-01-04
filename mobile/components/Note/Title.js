import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Title(props) {
    const { title } = props;
    return (
        <View style={styles.content}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        borderBottomWidth: 1,
        borderColor: "#587"
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        padding:10
    }
})