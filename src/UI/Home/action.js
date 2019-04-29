import { GETTING_DEVICES, GET_SUCCESS_DEVICES, GET_FAIL_DEVICES } from "../../util/value_containt/actions_type";
import { getDevicesApi } from "../../network/API";


export function gettingDevices(){
    return {
        type:GETTING_DEVICES,
    }
}

export function getSuccessDevices(devices){
    return {
        type: GET_SUCCESS_DEVICES,
        payload: devices
    }
}

export function getFailDevices(err){
    return {
        type: GET_FAIL_DEVICES,
        error: err
    }
}

export function  getDevices(token){
    return (dispatch) => {
        dispatch(gettingDevices())
        getDevicesApi(token).then(res => {
            const data = res.data
            console.log(["DATA" , data])
            dispatch(getSuccessDevices(data.things))
        }).catch(err => dispatch(getFailDevices(err)))

        
    }
}