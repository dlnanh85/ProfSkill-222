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
import { get, post } from "../http";

const Door = () => {
    const navigation = useNavigation();
    const [doorLocked, setDoorLocked] = useState(0);
    const [statuses, setStatuses] = useState([]);

    const renderStatus = statuses.map((stat, key) => (
        <LogItem key={key} time={stat.time} isLocked={stat.isLocked} />
    ));

    const handleDoorLock = () => {
        setDoorLocked((previousState) => previousState == 0 ? 1 : 0);
    };

    useEffect(() => {
        post("door", doorLocked).then(async () => {
            const response = await fetch(`https://io.adafruit.com/api/v2/dlnanh85/feeds/door/data`, {
                headers: {
                "X-AIO-Key": "aio_XaQb46Q7vxr3vP8Cn4mccSPVdSwr",
                },
            });
            const data = await response.json();
            console.log(data);
            // console.log(statuses)
            setStatuses(
                data.map((dataPoint) => ({time: dataPoint.created_at.replaceAll('-', '/').replace('T', ' ').replace('Z', ''), isLocked: Number(dataPoint.value),}))
            );
        });
    }, [doorLocked]);

    return (
        <View style={{ backgroundColor: Color.wheat }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={(width = "100%")}
                            resizeMode="cover"
                            source={require("../assets/back-button.png")}
                        />
                    </Pressable>
                    <Text style={styles.title}>{`Door Control`}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.switchContainer}>
                        <Pressable
                            style={[
                                styles.lock,
                                {
                                    backgroundColor: doorLocked
                                        ? Color.orangered
                                        : "green",
                                },
                            ]}
                            onPress={() => {
                                handleDoorLock();
                            }}
                        >
                            <Text style={styles.lockText}>
                                {doorLocked ? `LOCKED` : `UNLOCKED`}
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.logContainer}>
                        <Text style={styles.logTitle}>STATUS LOG</Text>
                        <ScrollView
                            styleContentContainer={{ alignItems: "center" }}
                            style={styles.logContent}
                        >
                            {renderStatus}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },

    heading: {
        backgroundColor: Color.wheat,
        display: "flex",
        justifyContent: "space-around",
        height: "25%",
        padding: 30,
    },

    backButton: {
        width: 30,
    },

    title: {
        color: Color.vertBleu,
        lineHeight: 40,
        fontSize: FontSize.size_13xl,
        fontWeight: "700",
    },

    content: {
        display: "flex",
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        flexGrow: 1,
        backgroundColor: Color.c2,
    },

    switchContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: 20,
        height: "25%",
        width: "100%",
    },

    lock: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.orangered,
        height: "80%",
        width: "100%",
        borderRadius: 20,
    },

    lockText: {
        color: "#fff",
        fontSize: FontSize.size_17xl,
        fontWeight: "700",
    },

    logContainer: {
        // flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Color.goldenrod,
        width: "100%",
        height: "60%",
        padding: 20,
        borderRadius: 20,
    },

    logTitle: {
        fontSize: FontSize.size_17xl,
        fontWeight: "700",
        color: Color.buse,
        marginBottom: 10,
    },

    logContent: {
        backgroundColor: Color.wheat,
        width: "100%",
        flexGrow: 1,
        borderRadius: 20,
        display: "flex",
        // alignItems: 'center',
        padding: 20,
    },
});

export default Door;
