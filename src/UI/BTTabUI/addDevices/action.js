
import { ADDING_DEVICE, ADDED_DEVICE, ADD_FAIL_DEVICE } from '../../../util/value_containt/actions_type';

export function addingDevice(){
    return {
        type:  ADDING_DEVICE
    }
}

export function addedDevice(device){
    return {
        type: ADDED_DEVICE,
        payload: device
    }
}

export function addFailDevice(err){
    return {
        type: ADD_FAIL_DEVICE
    }
}