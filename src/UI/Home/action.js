import { GETTING_DEVICES, GET_SUCCESS_DEVICES, GET_FAIL_DEVICES } from "../../util/value_containt/actions_type";
import { getDevicesApi, createChanelApi, getChannelApi } from "../../network/API";
import { alerMsgCallApi } from '../../util/function_util/alerMsgCallAPI';


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

export function  getDevices(self, token){
    return (dispatch) => {
        dispatch(gettingDevices())
        getDevicesApi(token).then(res => {
            console.log(["RES GETDEVICES: ", res])
            const data = res.data
            alerMsgCallApi(self, res)
            console.log(["DATA" , data])
            dispatch(getSuccessDevices(data.things))
        }).catch(err => dispatch(getFailDevices(err)))

        
    }
}


export function getChannelSuccess(chanel){
    return {

    }
}

export function getChanelAction(username, token){
    return (dispatch) => {
        getChannelApi(token).then(res => {
            console.log(["GET CHANNELs", res])
        })
    }
}