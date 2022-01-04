import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'
import useInertia from '../hooks/useInertia';
import { getViewGET } from '../api/getView';
import Title from './Note/Title';
import Content from './Note/Content';
import { useNavigation, useIsFocused } from '@react-navigation/native'

export default function NoteDetail(props) {
    const { route: { params } } = props;
    const { setValues } = useInertia();
    const [note, setNote] = useState({})
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        (async() =>{
            const response = await getViewGET(`notes/detail/${params.id}`);
            setValues(response.data);
            setNote(response.data.props.note)
        })()
    },[isFocused])


    const deleteNote = async () => {
        const response = await getViewGET(`notes/delete/${params.id}`);
        navigation.navigate("NoteList")
    }

    const editNote = async () => {
        navigation.navigate("NoteEdit", { id: params.id })
    }

    return (
        !note ? 
        (<Text></Text>)
        :
        (<View style={styles.content}>
            <Title title={note.excerpt} />
            <Content content={note.content} />
            <View style={styles.button}>
                <Button title="Edit" onPress={editNote} />
            </View>
            <View style={styles.button}>
                <Button color="#ff5c5c" title="Delete" onPress={deleteNote} />
            </View>
        </View>)
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 5,
        paddingHorizontal: 20,
    },
    button:{
        marginTop: 10
    },
})
