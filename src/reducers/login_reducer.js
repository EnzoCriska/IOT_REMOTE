
import { LOGINING, LOGIN_SUCCESS, LOGIN_FAIL, GET_TOKEN, GET_CHANNEL_SUCCESS, GET_APP_SUCCESS } from '../util/value_containt/actions_type';

const APP_STATE = {
    token: '',
    refreshtoken: '',
    isLoading: false,
    error: '',
    channel: ''
}

export default (state = APP_STATE, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload,
                user_name: action.user_name,
                channel: action.channel,
                app: action.app
            }

        case LOGINING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user_name: action.user_name,
                // refreshtoken: action.payload.refreshtoken,
                isLoading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        case GET_CHANNEL_SUCCESS:
            return {
                ...state,
                channel: action.payload
            }

        case GET_APP_SUCCESS:
            return {
                ...state,
                app: action.payload
            }
        default:
            return state
    }
}
