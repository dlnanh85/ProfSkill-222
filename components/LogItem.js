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
} from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LogItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.time}>{props.time}</Text>
            <Text style={[styles.isLocked, {color: props.isLocked ? 'red' : 'green'}]}>{props.isLocked ? 'LOCKED' : 'UNLOCKED'}</Text>
        </View>
    );
}

export default LogItem;

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    time: {
        color: 'black',
        fontSize: 15,
    },

    isLocked: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },

})