import React, {useState, useEffect} from 'react'
import { View } from 'react-native'
import LoginForm from '../components/Auth/LoginForm';
import Logout from '../components/Auth/Logout';
import useInertia from '../hooks/useInertia';
import { getViewGET } from '../api/getView';
import { useIsFocused } from '@react-navigation/native';


export default function Login() {
    const [username, setUsername] = useState("");
    const { iProps, setValues } = useInertia();
    const isFocused = useIsFocused();

    useEffect(async () =>{
        if(isFocused && !iProps?.auth.user.username){
            if(iProps) setUsername(iProps.auth.user.username)
            const response = await getViewGET("login");
            setValues(response.data);
        }
    },[isFocused])

    useEffect(() => {
        if(iProps){
            setUsername(iProps.auth.user.username);
        }
    }, [iProps])

    return (
        <View>
            {username ? <Logout /> : <LoginForm />}
        </View>
    )
}
