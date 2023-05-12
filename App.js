import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import SignIn from "./screens/SignIn";
import DoorController from "./modules/door/DoorController";
import Home from "./screens/Home";
import LightingController from "./modules/light/LightingController";
import TvController from "./modules/tv/TvController";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import React, { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"SignIn"}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Door" component={DoorController} />
                <Stack.Screen name="Light" component={LightingController} />
                <Stack.Screen name="Tv" component={TvController} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
