
import { LOGINING, LOGIN_SUCCESS, LOGIN_FAIL } from '../../../util/value_containt/actions_type';
import { loginApi, createChanelApi } from '../../../network/API';
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


export function createdChanel(chanel) {
    return {

    }
}

export function createChanel(name, token) {
    return (dispatch) => {
        createChanelApi("ABC", token).then(res => {
            console.log(["CHANEL CREATED", res])
            alerMsgCallApi(res)
            // dispatch(createdChanel(chanel))
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

                console.log(["SAVE ", username])
                saveAccessToken(res.data.token)
                saveStatusLogin(username)

                self.props.navigation.navigate("home")
            } else {
                dispatch(login_fail())
            }

        })
    }
}