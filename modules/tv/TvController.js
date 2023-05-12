import React, { useReducer, useEffect, useRef } from "react";
import TvView from "./TvView"
import { useNavigation } from "@react-navigation/native";
import { get, post } from "../../http";


const TvModel = {
    volumeUp: 0,
    volumeDown: 0,
    channelUp: 0,
    channelDown: 0,
    power: true
}


const TvModelReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'PRESS_VOLUME_UP':
            return {...state, volumeUp: state.volumeUp + 1}
        case 'PRESS_VOLUME_DOWN':
            return {...state, volumeDown: state.volumeDown + 1}
        case 'PRESS_CHANNEL_UP':
            return {...state, channelUp: state.channelUp + 1}
        case 'PRESS_CHANNEL_DOWN':
            return {...state, channelDown: state.channelDown + 1}
        case 'PRESS_POWER':
            return {...state, power: !state.power}
        case 'SET_POWER':
            return {...state, power: payload}
    }
}

let GLOBAL_POWER;


const TvController = () => {

    // NAVIGATION
    const navigation = useNavigation();
    const handleNavigate = () => {navigation.goBack()};

    // HELPERS
    const useComponentWillMount = (callback) => {
        const willMount = useRef(true)
        if (willMount.current) callback()
        willMount.current = false
    }

    useComponentWillMount(async () => {
        let data = await get('tv', limit=1);
        dispatch({type: 'SET_POWER', payload: data[0].value == 'ON' ? true : false})
    })

    const [model, dispatch] = useReducer(TvModelReducer, TvModel);
    GLOBAL_POWER = model.power;

    // HANDLERS
    const handleButtonsPress = (button) => {
        switch(button) {
            case 0:
                dispatch({type: 'PRESS_POWER'});
                break;
            case 1:
                dispatch({type: 'PRESS_VOLUME_UP'});
                post('vol', 1);
                break;
            case 2:
                dispatch({type: 'PRESS_VOLUME_DOWN'});
                post('vol', 1);
                break;
            case 3:
                dispatch({type: 'PRESS_CHANNEL_UP'});
                post('chn', 1);
                break;
            case 4:
                dispatch({type: 'PRESS_CHANNEL_DOWN'});
                post('chn', 1);
        }
    }

    useEffect(() => {
        post('tv', model.power ? 'ON' : 'OFF')
    }, [model.power])

    useEffect(() => {
        const interval = setInterval(async() => {
            let data = await get('tv', limit=1);
            // console.log((data[0].value == 'ON' ? true : false))
            console.log(GLOBAL_POWER);
            if ((data[0].value == 'ON' ? true : false) != GLOBAL_POWER) {
                console.log('hi')
                dispatch({type: 'SET_POWER', payload: data[0].value == 'ON' ? true : false})
            }
        }, 2000)

        return () => clearInterval(interval);
    }, [])

    return (<TvView model={model} onButtonsPress={handleButtonsPress} onNavigate={handleNavigate}/>);
}

export default TvController;