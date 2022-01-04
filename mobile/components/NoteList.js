import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import { getViewGET } from '../api/getView';
import useInertia from '../hooks/useInertia'
import NoteCard from './NoteCard';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function NoteList() {
    const [notes, setNotes] = useState([]);
    const { setValues } = useInertia();
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const Icon = FontAwesome5;

    const addFavorite = () => {
        navigation.navigate("NoteCreate")
    }

    const addIcon = <Icon
        name="plus"
        color="blue"
        size={20}
        onPress={addFavorite}
        style={{ marginRight: 20 }}
    />

    useEffect(async() =>{
        if(isFocused) {
            const response = await getViewGET("notes");
            setValues(response.data);
            setNotes(response.data.props.notes)
        }
    },[isFocused])

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Icon
                name="plus"
                color="blue"
                size={15}
                onPress={addFavorite}
                style={{ marginRight: 20 }}
            />
          ),
        });
    }, [navigation]);

    return (
        <>
            <FlatList 
                data={notes}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(note) => note.id}
                renderItem={({item}) => <NoteCard note={item} />}
                style={styles.flatListContentContainer}
            />
        </>
    )
}


const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 10,
        marginTop: 5
    },
})