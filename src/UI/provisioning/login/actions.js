
import { LOGINING, LOGIN_SUCCESS, LOGIN_FAIL } from '../../../util/value_containt/actions_type';
import { loginApi } from '../../../network/API';
import { alerMsgCallApi } from '../../../util/function_util/alerMsgCallAPI';
import { Toast } from 'native-base';
import { saveAccessToken } from '../../../util/function_util/asyncStorage';

export function logining(){
    return{
        type: LOGINING
    }
}

export function login_success(data){
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function login_fail(error){
    return {
        type: LOGIN_FAIL,
        error: error
    }
}


export function login_actions(self,username, password){
    return (dispatch) => {
        dispatch(logining())
        loginApi(username, password).then(res => {

            alerMsgCallApi(res)
            console.log(res)
            saveAccessToken(res.data.token)
            if(res.status === 200 || res.status === 201){
                Toast.show({
                    text:"Đăng nhập thành công!",
                    type: "success"
                })
                dispatch(login_success(res.data))
                self.props.navigation.navigate("home")
            }else{
                dispatch(login_fail())
            }
            
        })
    }
}