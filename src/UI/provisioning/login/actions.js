
import { LOGINING, LOGIN_SUCCESS, LOGIN_FAIL, GET_CHANNEL_SUCCESS, GET_APP_SUCCESS } from '../../../util/value_containt/actions_type';
import { loginApi, createChanelApi, getChannelApi, addDeviceApi, getDevicesApi, addThingstoChannelApi } from '../../../network/API';
import { alerMsgCallApi } from '../../../util/function_util/alerMsgCallAPI';
import { Toast } from 'native-base';
import { saveAccessToken, saveStatusLogin } from '../../../util/function_util/asyncStorage';

export function logining() {
    return {
        type: LOGINING
    }
}

export function login_success(data, user_name) {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
        user_name: user_name
    }
}

export function login_fail(error) {
    return {
        type: LOGIN_FAIL,
        error: error
    }
}

export function getAppSuccess(app){
    return{
        type: GET_APP_SUCCESS,
        payload: app
    }
}

export function createAppThing(token, name, chanel){
    return (dispatch) => {
        getDevicesApi(token).then(res => {
            console.log(["GET DEVICE CREATE APP", res.data.things])
            const things = res.data.things
            var found = things.find((element) => {
                return element.name === name && element.type === "app"
            })

            console.log(found)

            if(found) {
                dispatch(getAppSuccess(found))
                var newStatus = {
                    user_name: name,
                    channel: chanel,
                    app: found
                }
                addThingstoChannelApi(token, chanel.id, found.id)
                console.log(["SAVE", newStatus])
                saveStatusLogin(newStatus)
            }else{
                addDeviceApi(token, null, name, null, true).then(res => {
                    console.log(["CREATE APP",res])
                    alerMsgCallApi(res)
                    dispatch(createAppThing(token, name, chanel))
                }).catch(err => console.log(err))
            }
        })

        
    }
}

export function getChannelSuccess(chanel){
    return {
        type: GET_CHANNEL_SUCCESS,
        payload: chanel
    }
}



export function createChanel(name, token) {
    return (dispatch) => {
        console.log("CREATTING...")
        getChannelApi(token).then(res => {
            const channels = res.data.channels
            console.log(["GET CHANNELS", channels])
            
            var found = channels.find((element) => {
                return element.name === name
            })
            console.log(["FOUND", found])
            if(found){
                dispatch(getChannelSuccess(found))
                
                var status = {
                    user_name: name,
                    channel: found
                }
                dispatch(createAppThing(token, name, found))
                // saveStatusLogin(status)
            }else{
                createChanelApi(name, token).then(res => {
                    console.log(["CHANEL CREATED", res])
                    alerMsgCallApi(res)
                    dispatch(createChanel(name, token))
                })
            }
        })     
    }
}

export function login_actions(self, username, password) {
    return (dispatch) => {
        dispatch(logining())
        loginApi(username, password).then(res => {

            alerMsgCallApi(self, res)

            if (res.status === 200 || res.status === 201) {
                Toast.show({
                    text: "Đăng nhập thành công!",
                    type: "success"
                })
                dispatch(login_success(res.data, username))
                dispatch(createChanel(username,res.data.token))

                saveAccessToken(res.data.token)
                self.props.navigation.navigate("home")
            } else {
                dispatch(login_fail())
            }

        })
    }
}