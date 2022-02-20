import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//screens
import Welcome from "../Screens/Welcome";
import Home from '../Screens/Home'
import Detail from "../Screens/Detail"
import { enableScreens } from 'react-native-screens';
import { createStackNavigator  } from '@react-navigation/stack';


enableScreens();
const Stack = createStackNavigator ();
export default function StackNav() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Home" component={Home}  />
              <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
