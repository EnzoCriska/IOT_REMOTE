import { deleteDevicesApi } from "../../network/API";
import { Toast } from "native-base";
import { DELETED_DEVICE } from '../../util/value_containt/actions_type';


export function deletedDevice(thingId){
    return {
        type: DELETED_DEVICE,
        payload: thingId
    }
}

export function deleteDeviceAction(token,thingId){
    return (dispatch) => {
        deleteDevicesApi(token, thingId).then(res => {
            console.log(res)
            if(res.status === 204){
                dispatch(deletedDevice(thingId))
            }else{
                Toast.show({
                    text: "Lỗi khi xóa thiết bị!",
                    type: "danger"
                })
            }
        })
    }
}