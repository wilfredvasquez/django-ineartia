import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator()

export default function NavigationUserAnonymous() {
    const Icon = FontAwesome5;

    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen 
                name="Home"
                component={Home} 
                options={{
                    tabBarLabel:"Home",
                    headerTitle: "Demo",
                    tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
                }}
            />
            <Tab.Screen 
                name="Login"
                component={Login}
                options={{
                    tabBarLabel:"Login",
                    headerTitle: "Account",
                    tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    )
}
