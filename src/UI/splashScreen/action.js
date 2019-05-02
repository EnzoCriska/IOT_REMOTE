import { GET_TOKEN } from "../../util/value_containt/actions_type";
import { getAccessToken, getStatusLogin } from '../../util/function_util/asyncStorage';

export function getedToken(token, status){
    const statusJSON = JSON.parse(status)
    console.log(statusJSON)
    return {
        type: GET_TOKEN,
        payload: token,
        user_name: statusJSON.user_name,
        channel: statusJSON.channel,
        app: statusJSON.app
    }
}

export function gettingToken(self){
    return (dispatch) => {
        getAccessToken().then(token =>{
            if(token !== "") {
                console.log(["GETSSUCESS: ", token])
                getStatusLogin().then(status => {
                    // console.log(["GETSTATUS LOGIN: ", status.slice(0, status.length)])
                    dispatch(getedToken(token, status.slice(0, status.length)))
                    self.props.navigation.navigate("home")
                })
                
            }else{self.props.navigation.navigate("login")}
          }).catch(err => console.log(["SPLASH ERROR: ", err]))
    }
}