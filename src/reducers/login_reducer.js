
import { LOGINING, LOGIN_SUCCESS, LOGIN_FAIL } from '../util/value_containt/actions_type';

const APP_STATE = {
    token: '',
    refreshtoken: '',
    isLoading: false,
    error: ''
}

export default (state = APP_STATE, action) => {
    switch (action.type) {
        case LOGINING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                // refreshtoken: action.payload.refreshtoken,
                isLoading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

    

        default:
            return state
    }
}
