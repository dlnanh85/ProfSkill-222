import React from "react";
import {
    Pressable,
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    Switch,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import VerticalSlider from "rn-vertical-slider";



const LightingView = (props) => {
    return (<>
            <SafeAreaView style={{backgroundColor: Color.wheat, flexGrow: 1}}></SafeAreaView>
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <Pressable
                        onPress={() => props.onNavigate()}
                        style={styles.backButton}
                    >
                        <Image
                            style={(width = "100%")}
                            resizeMode="cover"
                            source={require("../../assets/back-button.png")}
                        />
                    </Pressable>

                    <Text style={styles.title}>{`Lighting System`}</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.lightControl}>
                        <View style={styles.dragBrightness}>
                            <VerticalSlider
                                value={props.model.brightness}
                                onChange={(value) =>
                                    props.onSetBrightness(value)
                                }
                                height={400}
                                width={40}
                                step={25}
                                min={0}
                                max={100}
                                borderRadius={5}
                                maximumTrackTintColor="#D1D1D6"
                                minimumTrackTintColor={Color.orangered}
                            />
                        </View>

                        <View style={styles.brightnessNum_switch}>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <Text
                                    style={styles.brightnessNum}
                                >{`${props.model.brightness}%`}</Text>
                            </View>
                            <Text
                                style={styles.brightnessLabel}
                            >{`Brightness`}</Text>
                            <Switch
                                style={styles.switch}
                                trackColor={{
                                    true: Color.orangered,
                                    // false: Color.orangered,
                                }}
                                thumbColor={Color.goldenrod}
                                onValueChange={() => {
                                    props.onSwitch();
                                }}
                                value={props.model.brightness != 0}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            </>);
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

    lightControl: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    dragBrightness: {
        width: "20%",
    },

    brightnessNum_switch: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
    },

    brightnessNum: {
        color: Color.buse,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        // fontFamily: FontFamily.latoExtrabold,
        fontWeight: "800",
        fontSize: 100,
    },

    brightnessLabel: {
        color: Color.gray_200,
        // fontFamily: FontFamily.latoExtrabold,
        fontWeight: "800",
        fontSize: 18,
    },

    switch: {
        marginTop: 30,
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },

    schedule: {},

    scheduleTitle: {},

    container2: {},

    container3: {},

    lightingTypo: {
        height: 80,
        width: 234,
        textAlign: "left",
        left: 33,
        top: 110,

        position: "absolute",
    },
    lowTypo: {
        lineHeight: 17,
        fontSize: FontSize.size_sm,
        width: 235,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        color: Color.gray_300,
        // fontFamily: FontFamily.latoExtrabold,
        fontWeight: "800",
        height: 53,
        position: "absolute",
    },
    text2FlexBox: {},
    vectorIconPosition: {
        top: 829,
        width: 24,
    },
    frameChildLayout: {
        height: 62,
        width: 111,
        position: "absolute",
    },
    lightingSystemChild: {
        top: 53,
        height: 182,
        width: 430,
        backgroundColor: Color.wheat,
        left: -1,
        position: "absolute",
    },
    lightingSystemItem: {
        height: 53,
        top: 0,
        width: 430,
        backgroundColor: Color.wheat,
        left: -1,
        position: "absolute",
    },
    LightingSystem: {},
    blankLine: {
        color: Color.black,
    },
    lightingSystem1: {
        lineHeight: 40,
        fontSize: FontSize.size_13xl,
    },
    // schedule: {
    //     top: 710,
    //     left: -43,
    //     width: 235,
    //     color: Color.gray_300,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     display: "flex",
    //     textAlign: "center",
    //     fontFamily: FontFamily.latoExtrabold,
    //     fontWeight: "800",
    //     lineHeight: 25,
    //     fontSize: FontSize.size_xl,
    //     height: 53,
    //     position: "absolute",
    // },
    low: {
        top: 649,
        left: -87,
    },
    high: {
        top: 283,
        left: -85,
    },
    from: {
        fontSize: FontSize.size_smi,
        // fontFamily: FontFamily.latoRegular,
    },
    text: {
        fontSize: FontSize.size_mini,
        // fontFamily: FontFamily.latoBold,
        fontWeight: "700",
    },
    from1200AmContainer1: {
        lineBreak: "anywhere",
        width: "100%",
    },
    from1200AmContainer: {
        top: 752,
        width: 205,
        height: 16,
        alignItems: "center",
        display: "flex",
        color: Color.black,
        textAlign: "left",
        left: 33,
        position: "absolute",
    },
    text2: {},
    brightness: {
        top: 534,
        left: 261,

        width: 127,
        height: 43,
        justifyContent: "center",
        textAlign: "center",

        lineHeight: 25,

        alignItems: "center",
        display: "flex",
        position: "absolute",
    },
    lightName: {
        top: 810,
        left: 78,
        fontSize: FontSize.size_29xl,
        lineHeight: 59,
        width: 273,
        height: 65,
    },
    lightingSystemInner: {
        left: 35,
    },
    vectorIcon: {
        left: 368,
    },
    lightingSystem4: {
        fontSize: FontSize.size_17xl,
        color: Color.vertBleu,
    },
    blankLine1: {
        color: Color.black,
        fontSize: FontSize.size_13xl,
    },
    frameChild: {
        left: 0,
        borderRadius: Border.br_16xl,
        backgroundColor: Color.goldenrod,
        top: 0,
    },
    frameItem: {
        top: 7,
        left: 56,
        width: 48,
        height: 48,
        position: "absolute",
    },
    rectangleParent: {
        top: 599,
        left: 265,
    },
    groupIcon: {
        top: 324,
        left: 17,
        width: 178,
        height: 340,
        position: "absolute",
    },
    image2Icon: {
        left: 173,
        width: 257,
        height: 410,
        top: 0,
        position: "absolute",
    },
    lightingSystemChild4: {
        borderTopRightRadius: Border.br_9981xl,
        borderBottomRightRadius: Border.br_9981xl,
        backgroundColor: Color.vertBleu,
        width: 1,
        top: 0,
        left: -1,
        position: "absolute",
        height: 932,
    },
    lightingSystem: {
        borderRadius: Border.br_5xl,
        backgroundColor: Color.c2,
        flex: 1,
        overflow: "hidden",
        height: 932,
        width: "100%",
    },
});

export default LightingView;
