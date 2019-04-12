import {createStackNavigator} from "react-navigation"
import Login from "./login";
import Register from "./register";

export const provisioning_stack = createStackNavigator({
    Login: Login,
    Register: Register
},{
    headerMode: 'none'
})