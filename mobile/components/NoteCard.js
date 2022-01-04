import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { capitalize } from 'lodash';
import { useNavigation } from '@react-navigation/native'

export default function NoteCard(props) {
    const { note } = props;
    const navigation = useNavigation();

    const goToNote = () => {
        navigation.navigate("NoteDetail", { id: note.id })
    }

    return (
        <TouchableWithoutFeedback onPress={goToNote}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Text style={styles.title}>{capitalize(note.excerpt)}</Text>
                        <Text style={styles.content}>{capitalize(note.content)}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: "#000",
        borderWidth: 1
    },
    title: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 18,
    },
    content: {
        color: "#000",
        fontSize: 15,
        paddingTop: 10
    }, 
})
