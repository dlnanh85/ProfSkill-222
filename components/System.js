import React, { useState, useEffect } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable,
    ScrollView,
    Fragment,
    SafeAreaView,
    KeyboardAvoidingView,
    Switch,
    Button,
} from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import LogItem from "../components/LogItem";
import { useNavigation } from "@react-navigation/native";

const System = (props) => {
    const buttonColor = ['#009EFF', '#16A085', '#E74C3C', '#F39C12'];
    const buttonColorFaded = ['#008DEE', '#059074', '#D63B2B', '#D28B01'];
    const navigation = useNavigation();

    return (
        <Pressable onPress={props.handlePress(props.name)} style={({pressed}) => [styles.button, {backgroundColor: pressed ? buttonColorFaded[props.colorCode] : buttonColor[props.colorCode]}]}>
            <Text style={styles.buttonText}>{props.name.toUpperCase()}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.orangered,
        width: "100%",
        borderRadius: 20,
        padding: 20,
    },

    buttonText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "700",
    },
});

export default System