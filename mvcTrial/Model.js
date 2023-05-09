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
import Door from "./Door"
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import LogItem from "../components/LogItem";
import { useNavigation } from "@react-navigation/native";
import { get, post } from "../http";



const DoorController = () => {
    const navigation = useNavigation();
    const [doorLocked, setDoorLocked] = useState(0);
    const [statuses, setStatuses] = useState([]);

    const renderStatus = statuses.map((stat, key) => (
        <LogItem key={key} time={stat.time} isLocked={stat.isLocked} />
    ));

    const handleDoorLock = () => {
        console.log('BUTTON PRESSED')
        setDoorLocked((previousState) => previousState == 0 ? 1 : 0);
    };

    useEffect(() => {
        post("door", doorLocked).then(async () => {
            const response = await fetch(`https://io.adafruit.com/api/v2/dlnanh85/feeds/door/data`, {
                headers: {
                "X-AIO-Key": "aio_BjpJ46KwbyzyeWTRNJlcOKI48wEg",
                },
            });
            const data = await response.json();
            // console.log(data);
            // console.log(statuses)
            setStatuses(
                data.map((dataPoint) => ({time: dataPoint.created_at.replaceAll('-', '/').replace('T', ' ').replace('Z', ''), isLocked: Number(dataPoint.value),}))
            );
        });
    }, [doorLocked]);

    const handleNavigate = () => {navigation.goBack()}

    return (<Door statuses={renderStatus} doorLocked={doorLocked} handleDoorLock={handleDoorLock} handleNavigate={handleNavigate}/>);
}

export default DoorController;