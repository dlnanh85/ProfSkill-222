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
import System from "../components/System";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Home = () => {
    const navigation = useNavigation();
    const buttonColor = ['#009EFF', '#16A085', '#E74C3C', '#F39C12'];
    const buttonColorFaded = ['#008DEE', '#059074', '#D63B2B', '#D28B01'];

    const handlePress = (sysName) => {
        navigation.navigate(sysName);
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate("SignIn");
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Color.wheat }} />
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <View style={styles.userInfo}>
                        <View style={styles.greeting}>
                            <Text style={styles.greetingName}>
                                {"Hello Mr. John"}
                            </Text>
                            <Text style={styles.greetingSub}>
                                {"Welcome home!"}
                            </Text>
                        </View>
                        <Image
                            style={styles.avaImg}
                            resizeMode="cover"
                            source={require("../assets/cat.jpg")}
                        ></Image>
                    </View>
                    <Pressable
                        style={styles.signOut}
                        onPress={() => handleSignOut()}
                    >
                        <Text style={styles.signOutText}>{"SIGN OUT"}</Text>
                    </Pressable>
                </View>
                <View style={styles.content}>
                    <View style={styles.deviceList}>
                        <Text style={styles.deviceListText}>
                            {"Device list"}
                        </Text>
                        <Text
                            style={[
                                styles.deviceListText,
                                { textDecorationLine: "underline" },
                            ]}
                        >
                            {"See all"}
                        </Text>
                    </View>
                    <View style={styles.system}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? buttonColorFaded[0]
                                        : buttonColor[0],
                                },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {'LIGHTING'}
                            </Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? buttonColorFaded[1]
                                        : buttonColor[1],
                                },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {'TELEVISION'}
                            </Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? buttonColorFaded[2]
                                        : buttonColor[2],
                                },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {'CAMERA'}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate('door')}
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? buttonColorFaded[3]
                                        : buttonColor[3],
                                },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {'DOOR'}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
    },

    heading: {
        backgroundColor: Color.wheat,
        display: "flex",
        alignItems: "center",
        height: "30%",
        padding: 30,
    },

    userInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
    },

    greetingName: {
        color: Color.vertBleu,
        lineHeight: 40,
        fontSize: 30,
        fontWeight: "700",
    },

    greetingSub: {
        color: "#555",
        lineHeight: 40,
        fontSize: 20,
        fontWeight: "700",
    },

    avaImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },

    signOut: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.orangered,
        width: "100%",
        height: "35%",
        borderRadius: 10,
    },

    signOutText: {
        color: "white",
    },

    content: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.c2,
        padding: 30,
    },

    deviceList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        color: "#000",
    },

    deviceListText: {
        fontSize: 16,
        fontWeight: "700",
    },

    system: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.c2,
        padding: 30,
        width: "100%",
    },

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

export default Home;
