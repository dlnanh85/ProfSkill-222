import React, { useRef, useReducer, useEffect } from "react";
import {
    Pressable,
    StyleSheet,
    View,
    Text,
    Image,
    Fragment,
    ScrollView,
    SafeAreaView,
    TextInput,
    Switch,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import VerticalSlider from "rn-vertical-slider";
import { useNavigation } from "@react-navigation/native";
import LightingView from "./LightingView";

import { post, get } from '../../http';

const feedKey = 'device-light';


let GLOBAL_BRIGHTNESS;

const LightModel = {
    brightness: 0
}


const LightModelReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case 'SET_BRIGHTNESS':
            return {...state, brightness: payload}
        case 'TOGGLE':
            return {...state, brightness: state.brightness > 0 ? 0 : 100}
        default:
            return state;
    }
}


const LightingController = () => {
    // HELPERS
    const useComponentWillMount = (callback) => {
        const willMount = useRef(true)
        if (willMount.current) callback()
        willMount.current = false
    }
    useEffect(() => {
        const interval = setInterval(async () => {
            console.log(GLOBAL_BRIGHTNESS);
            post(feedKey, GLOBAL_BRIGHTNESS);
        }, 2500);
        return () => {clearInterval(interval)}
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(async () => {
    //         let data = await get('device-light', limit=1);
    //         if (Number(data[0].value) != GLOBAL_BRIGHTNESS)
    //             dispatch({type: 'TOGGLE'})
    //     }, 2000);

    //     return () => clearInterval(interval)
    // }, [])


    // MODEL
    const [model, dispatch] = useReducer(LightModelReducer, LightModel);
    GLOBAL_BRIGHTNESS = model.brightness;

    useComponentWillMount(async () => {
        dispatch({type: 'SET_BRIGHTNESS', payload: Number((await get('device-light', limit=1))[0].value) })
    })


    // NAVIGATION
    const navigation = useNavigation();
    const handleNavigate = () => {navigation.goBack()};

    // HANDLERS
    const toggleSwitch = () => dispatch({type: 'TOGGLE'});
    const handleBrightnessChange = (value) => dispatch({type: 'SET_BRIGHTNESS', payload: value})

    return (<LightingView model={model} onSetBrightness={handleBrightnessChange} onNavigate={handleNavigate} onSwitch={toggleSwitch}/>);
};

export default LightingController;
