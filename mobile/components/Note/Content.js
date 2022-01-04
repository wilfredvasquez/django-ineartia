import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Content(props) {
    const { content } = props;
    return (
        <View style={styles.content}>
            <Text style={styles.text}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 15
    },
    text: {
        textAlign: "justify",
        fontSize: 15,
    }
})
