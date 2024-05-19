import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import WelcomeScreen from "../WelcomeScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RecipeListScreen from '../RecipeListScreen';
import RecipeDetailScreen from '../RecipeDetailScreen';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="RecipeList" component={RecipeListScreen} />
            <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})