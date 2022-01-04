import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { getViewGET } from '../api/getView';
import useInertia from '../hooks/useInertia';
import { useIsFocused } from '@react-navigation/native';


export default function Home() {
    const [user, setUser] = useState(null);
    const { iProps, setValues } = useInertia();
    const isFocused = useIsFocused();

    useEffect(async() =>{
        if(isFocused) {
            if(iProps) setUser(iProps.auth)
            const response = await getViewGET();
            setValues(response.data);
            setUser(response.data.props.auth)
        }
    },[isFocused])

    useEffect(() => {
        if(iProps){
            setUser(iProps.auth);
        }
    }, [iProps])

    return (
        <View style={styles.content}>
            <View style={styles.contentImage}>
                <Image
                    source={require('../assets/django-inertia.png')}
                    style={styles.image}
                />
            </View>
            {!user ? 
                (<Text>User no Logged</Text>)
            :
                (<View>
                    <Text style={styles.text}>Este es un Demo de Django con Inertia.js</Text>
                    <Text style={styles.text}>Disfrútalo {user ? user.user.username : ""}!</Text>
                </View>)
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    contentImage: {
        width: "100%",
    },
    text:{
        paddingVertical: 10,
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: "57%",
        resizeMode: 'stretch'
    }
})