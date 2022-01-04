import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { getViewGET } from '../api/getView';
import useInertia from '../hooks/useInertia';
import NoteList from '../components/NoteList';
import { useIsFocused } from '@react-navigation/native';


export default function Notes() {
    const [username, setUsername] = useState(null);
    const { iProps, setValues } = useInertia();
    const isFocused = useIsFocused();

    useEffect(async() =>{
        if(iProps) setUsername(iProps.auth.user.username)
        const response = await getViewGET();
        setValues(response.data);
    },[isFocused])

    useEffect(() => {
        if(iProps){
            setUsername(iProps.auth.user.username);
        }
    }, [iProps])

    return (
        !username ? 
        (<Text>User no Logged</Text>)
        :
        (<View>
            <NoteList />
        </View>)
    )
}