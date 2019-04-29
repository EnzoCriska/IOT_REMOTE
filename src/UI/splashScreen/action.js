import { GET_TOKEN } from "../../util/value_containt/actions_type";
import { getAccessToken } from '../../util/function_util/asyncStorage';

export function getedToken(token){
    return {
        type: GET_TOKEN,
        payload: token
    }
}

export function gettingToken(self){
    return (dispatch) => {
        getAccessToken().then(token =>{
            if(token !== "") {
                console.log(["GETSSUCESS: ", token])
                dispatch(getedToken(token))
                self.props.navigation.navigate("home")
            }else{self.props.navigation.navigate("login")}
          }).catch(err => console.log(["SPLASH ERROR: ", err]))
    }
}