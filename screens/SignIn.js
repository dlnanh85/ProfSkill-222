import React, { useState } from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("SIGNED IN");

                navigation.navigate("Home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);

                if (errorCode === "auth/user-not-found") return;
                else if (errorCode === "auth/invalid-email") return;
            });
    };

    return (
        <KeyboardAvoidingView
            behavior={"position"}
            style={{ height: "100%", backgroundColor: Color.c2 }}
        >
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.projectName}>{`House`}</Text>

                    <Image
                        style={styles.logo}
                        source={require("../assets/logo.png")}
                        resizeMode="contain"
                    ></Image>

                    <View style={styles.form}>
                        <Text style={styles.formTitle}>{`LOGIN`}</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Email"
                            onChangeText={(email) => setEmail(email)}
                        />
                        <TextInput
                            style={styles.formInput}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? "#0470b1"
                                        : Color.buse,
                                },
                                styles.formButton,
                            ]}
                            onPress={() => handleSignIn(email, password)}
                        >
                            <Text
                                style={styles.formButtonText}
                            >{`Sign In`}</Text>
                        </Pressable>
                    </View>

                    <Pressable style={styles.forgotButton}>
                        <Text
                            style={styles.forgotButtonText}
                        >{`Forgotten password?`}</Text>
                    </Pressable>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "auto",
    },

    projectName: {
        fontSize: 64,
        fontWeight: "600",
        color: Color.buse,
    },

    logo: {
        width: "80%",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
    },

    formTitle: {
        fontWeight: "700",
        alignSelf: "flex-start",
        fontSize: 40,
        color: Color.buse,
        marginBottom: 10,
    },

    formInput: {
        height: 50,
        width: "100%",
        borderColor: Color.buse,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        marginBottom: 10,
    },

    formButton: {
        height: 50,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    formButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "800",
    },

    forgotButton: {
        padding: 20,
    },

    forgotButtonText: {
        color: Color.buse,
        fontSize: 14,
        textDecorationLine: "underline",
    },
});

export default SignIn;
