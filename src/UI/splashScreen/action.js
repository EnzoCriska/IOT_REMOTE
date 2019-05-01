import { GET_TOKEN } from "../../util/value_containt/actions_type";
import { getAccessToken, getStatusLogin } from '../../util/function_util/asyncStorage';

export function getedToken(token, user_name){
    return {
        type: GET_TOKEN,
        payload: token,
        user_name: user_name
    }
}

export function gettingToken(self){
    return (dispatch) => {
        getAccessToken().then(token =>{
            if(token !== "") {
                console.log(["GETSSUCESS: ", token])
                getStatusLogin().then(user_name => {
                    console.log(["GETSTATUS LOGIN: ", user_name])
                    dispatch(getedToken(token, user_name.slice(1, user_name.length-1)))
                    self.props.navigation.navigate("home")
                })
                
            }else{self.props.navigation.navigate("login")}
          }).catch(err => console.log(["SPLASH ERROR: ", err]))
    }
}