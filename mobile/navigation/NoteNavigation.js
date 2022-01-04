import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NoteList from '../components/NoteList'
import NoteDetail from '../components/NoteDetail'
import NoteCreate from '../components/NoteCreate'
import NoteEdit from '../components/NoteEdit'

const Stack = createNativeStackNavigator()

export default function NoteNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NoteList" component={NoteList} options={{ headerTitle:"Notes" }} />
            <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ headerTitle: "Note Detail" }}/>
            <Stack.Screen name="NoteCreate" component={NoteCreate} options={{ headerTitle: "New Note" }}/>
            <Stack.Screen name="NoteEdit" component={NoteEdit} options={{ headerTitle: "Edit Note" }}/>
        </Stack.Navigator>
    )
}
