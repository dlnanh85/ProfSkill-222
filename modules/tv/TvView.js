import * as React from "react";
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
import { useNavigation } from "@react-navigation/native";
import {
    Color,
    FontSize,
    FontFamily,
    Padding,
    Border,
} from "../../GlobalStyles";

const TvView = (props) => {
    console.log(props.model);

    return (
        <>
            <SafeAreaView
                style={{ backgroundColor: Color.wheat, flexGrow: 1 }}
            ></SafeAreaView>
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <Pressable onPress={() => {props.onNavigate()}} style={styles.backButton}>
                        <Image
                            style={(width = "100%")}
                            resizeMode="cover"
                            source={require("../../assets/back-button.png")}
                        />
                    </Pressable>

                    <Text style={styles.title}>{`Television`}</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.remoteContainer}>
                        <View style={styles.powerButtonContainer}>
                            <Text style={styles.powerButtonText}>{'Turn On/Off'}</Text>
                        <Switch
                            style={styles.switch}
                            trackColor={{
                                true: Color.orangered,
                                // false: Color.orangered,
                            }}
                            thumbColor={Color.goldenrod}
                            onValueChange={() => {
                                props.onButtonsPress(0);
                            }}
                            value={props.model.power}
                        />
                        </View>
                        <View style={styles.functionButtonContainer}>
                            <View style={styles.functionButtonSubContainer}>
                                <Pressable onPress={() => props.onButtonsPress(1)} style={styles.functionButton}><Text style={[styles.buttonText, {fontSize: 35}]}>{`+`}</Text></Pressable>
                                <Text style={styles.buttonText}>{`VOL`}</Text>
                                <Pressable onPress={() => props.onButtonsPress(2)} style={[styles.functionButton, {backgroundColor: Color.tomato_100}]}><Text style={[styles.buttonText, {fontSize: 35, color: Color.white}]}>{`-`}</Text></Pressable>
                            </View>
                            <View style={styles.functionButtonSubContainer}>
                                <Pressable onPress={() => props.onButtonsPress(3)} style={styles.functionButton}><Text style={[styles.buttonText, {fontSize: 35}]}>{`+`}</Text></Pressable>
                                <Text style={styles.buttonText}>{`CH`}</Text>
                                <Pressable onPress={() => props.onButtonsPress(4)} style={[styles.functionButton, {backgroundColor: Color.tomato_100}]}><Text style={[styles.buttonText, {fontSize: 35, color: Color.white}]}>{`-`}</Text></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flexGrow: 1,
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
        flexDirection: "column",
        padding: 30,
        flexGrow: 1,
        backgroundColor: Color.c2,
    },
    remoteContainer: {
        // flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Color.wheat,
        width: "100%",
        height: "85%",
        padding: 20,
        borderRadius: 20,
    },
    switch: {
        marginTop: 30,
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },
    powerButtonContainer : {
        display: 'flex',
        alignItems: 'center',
    },
    powerButtonText : {
        color: Color.gray_200,
        fontSize: FontSize.size_5xl,
        fontWeight: 700,
    },
    functionButtonContainer: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    functionButtonSubContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60%',
    },
    buttonText: {
        color: Color.gray_200,
        fontSize: 25,
        fontWeight: 700,
    },
    functionButton: {
        width: 70,
        height: 70,
        backgroundColor: Color.goldenrod,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },











    mt_48: {
        marginTop: -48,
    },
    mt_43: {
        marginTop: -43,
    },
    iconLayout: {
        height: "100%",
        width: "100%",
    },
    vectorIconPosition: {
        top: 396,
        height: 34,
        width: 24,
        position: "absolute",
    },
    volumeTypo: {
        height: 43,
        color: Color.gray_200,
        lineHeight: 25,
        fontSize: FontSize.size_xl,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontFamily: FontFamily.latoExtrabold,
        fontWeight: "800",
        position: "absolute",
    },
    volumeLayout: {
        width: 127,
        height: 43,
        color: Color.gray_200,
        lineHeight: 25,
        fontSize: FontSize.size_xl,
    },
    frameChildLayout: {
        height: 62,
        width: 62,
    },
    rectangleParentPosition: {
        paddingBottom: 28,
        paddingLeft: Padding.p_43xl,
        height: 90,
        width: 62,
        alignItems: "center",
        position: "absolute",
    },
    frameLayout: {
        transform: [
            {
                rotate: "90deg",
            },
        ],
        width: 90,
        height: 62,
        borderRadius: Border.br_16xl,
    },
    textTypo: {
        height: 37,
        width: 23,
        lineHeight: 49,
        fontSize: FontSize.size_21xl,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontFamily: FontFamily.latoExtrabold,
        fontWeight: "800",
    },
    icon: {
        borderRadius: Border.br_5xl,
        height: "100%",
    },
    wrapper: {
        left: 35,
        width: 372,
        height: 447,
        top: 463,
        position: "absolute",
    },
    televisionChild: {
        top: -30,
        left: -128,
        backgroundColor: Color.wheat,
        width: 603,
        height: 259,
        position: "absolute",
    },
    backButtonPosition: {
        height: 34,
        width: 24,
        top: 44,
        left: 32,
        position: "absolute",
    },
    television1: {
        top: 40,
        left: 258,
        fontSize: FontSize.size_17xl,
        lineHeight: 44,
        fontWeight: "700",
        fontFamily: FontFamily.latoBold,
        color: Color.vertBleu,
        textAlign: "left",
        width: 234,
        height: 80,
        position: "absolute",
    },
    colorfulPlannerMobileAppPr: {
        top: 99,
        left: 36,
        width: 355,
        height: 278,
        position: "absolute",
    },
    tvName: {
        top: 377,
        left: 84,
        fontSize: FontSize.size_29xl,
        lineHeight: 59,
        color: Color.buse,
        width: 273,
        height: 65,
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        fontFamily: FontFamily.latoExtrabold,
        fontWeight: "800",
        alignItems: "center",
        position: "absolute",
    },
    televisionInner: {
        left: 41,
    },
    vectorIcon: {
        left: 374,
    },
    volume: {
        top: 698,
        left: 32,
        width: 127,
    },
    voiceCommand: {
        top: 735,
        left: 161,
        width: 119,
        height: 43,
        color: Color.gray_200,
        lineHeight: 25,
        fontSize: FontSize.size_xl,
    },
    turnOnoff: {
        left: 160,
        top: 463,
    },
    frameIcon: {
        top: 506,
        left: 166,
        width: 107,
        height: 60,
        borderRadius: Border.br_16xl,
        position: "absolute",
    },
    rectangleView: {
        left: -1,
        borderTopRightRadius: Border.br_9981xl,
        borderBottomRightRadius: Border.br_9981xl,
        backgroundColor: Color.vertBleu,
        width: 1,
        top: 0,
        position: "absolute",
        height: 932,
    },
    image3Icon: {
        width: 34,
        height: 35,
    },
    ellipseParent: {
        top: 665,
        left: 190,
        justifyContent: "flex-end",
        alignItems: "center",
        width: 62,
        position: "absolute",
    },
    frameItem: {
        backgroundColor: Color.goldenrod,
    },
    text: {
        color: Color.black,
    },
    rectangleParent: {
        left: 0,
        top: 0,
    },
    frameView: {
        top: 610,
        height: 90,
        width: 62,
        left: 32,
        position: "absolute",
    },
    frameInner: {
        backgroundColor: Color.tomato_100,
    },
    text1: {
        color: Color.gray_100,
    },
    rectangleGroup: {
        top: 752,
        left: 14,
    },
    channel: {
        top: 704,
        left: 284,
    },
    rectangleContainer: {
        top: 614,
        left: 283,
    },
    rectangleParent1: {
        top: 756,
        left: 287,
    },
    television: {
        backgroundColor: Color.c2,
        flex: 1,
        overflow: "hidden",
        height: 932,
        width: "100%",
        borderRadius: Border.br_5xl,
    },
});

export default TvView;
