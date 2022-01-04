import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import NoteNavigation from './NoteNavigation';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator()

export default function NavigationUserLogged() {
    const Icon = FontAwesome5;

    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen 
                name="Home"
                component={Home} 
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
                    headerTitle: "Demo"
                }}
            />
            <Tab.Screen 
                name="Notes"
                component={NoteNavigation} 
                options={{
                    tabBarLabel:"Notes",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Icon name="book" color={color} size={size} />,
                }}
            />
            <Tab.Screen 
                name="Logout"
                component={Login}
                options={{
                    tabBarLabel:"Account",
                    headerTitle: "Logout",
                    tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    )
}
