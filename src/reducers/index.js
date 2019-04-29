import { combineReducers } from "redux";
import login_reducer from './login_reducer'
import devices_reducer from './devices_reducer';

export default combineReducers({
    login_reducer,
    devices_reducer
})