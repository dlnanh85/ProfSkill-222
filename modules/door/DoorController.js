import React, { useReducer, useEffect, useRef } from "react";
import DoorView from "./DoorView"
import { useNavigation } from "@react-navigation/native";
import { get, post } from "../../http";


const useDoorModel = (something) => {
    const [doorLocked, setDoorLocked] = useState(0);
    const [statuses, setStatuses] = useState([]);
}


const DoorModel = {
    doorLocked: 0,
    statuses: [],
}

const DoorModelReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'TOGGLE':
            return { ...state, doorLocked: !state.doorLocked };
        case 'SET_DOORLOCKED':
            return { ...state, doorLocked: payload }
        case 'SET_STATUSES':
            return { ...state, statuses: payload };
        default:
            return state;
    }
}


const DoorController = () => {

    // NAVIGATION
    const navigation = useNavigation();
    const handleNavigate = () => {navigation.goBack()}
    
    // HELPERS
    const useComponentWillMount = (callback) => {
        const willMount = useRef(true)
        if (willMount.current) callback()
        willMount.current = false
    }
    useComponentWillMount(async () => {
        let data = await get('door-switch');
        dispatch({type: 'SET_STATUSES', payload: (await data).map((dataPoint) => ({time: dataPoint.created_at.replaceAll('-', '/').replace('T', ' ').replace('Z', ''), isLocked: dataPoint.value === 'LOCKED' ? 1 : 0,}))})
        dispatch({type: 'SET_DOORLOCKED', payload: (await data)[0].value === 'LOCKED' ? 1 : 0 })
    })
    
    // MODEL
    const [model, dispatch] = useReducer(DoorModelReducer, DoorModel);
    
    // HANDLERS
    const handleDoorLockPress = () => {
        dispatch({type: 'TOGGLE'})
    }
    
    const firstMount = useRef(true);
    useEffect(() => {
        if (!firstMount.current) {
            post('door-switch', model.doorLocked ? 'LOCKED' : 'UNLOCKED')
            .then(async () => {
                let data = await get('door-switch');
                dispatch({type: 'SET_STATUSES', payload: data.map((dataPoint) => ({time: dataPoint.created_at.replaceAll('-', '/').replace('T', ' ').replace('Z', ''), isLocked: dataPoint.value === 'LOCKED' ? 1 : 0,}))})
            })
        }
        else {
            firstMount.current = false;
        }
    }, [model.doorLocked])

    return (<DoorView model={model} onDoorLockPress={handleDoorLockPress} onNavigate={handleNavigate}/>);
}

export default DoorController;