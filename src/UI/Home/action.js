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
            const things = res.data.things
            alerMsgCallApi(self, res)
            console.log(["DATA" , things])
            for (let i = 0; i< things.length; i++){
                if(things[i].metadata.type === "app"){
                    things.splice(i, 1)
                    break;
                }
            }
            dispatch(getSuccessDevices(things))
        }).catch(err => dispatch(getFailDevices(err)))

        
    }
}

