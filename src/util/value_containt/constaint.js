import { Dimensions } from 'react-native';

export const {width, height} = Dimensions.get("window")

export const scale_point = width/360

export const RESPONSE_STATUS = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    REFRESH_TOKEN: 403,
    EXISTS_ACCOUNT: 409
}


export const ws = {
    WS_HOST : "35.247.152.248",
    WS_PORT: 3000,
    LOGOUT_REASON: 4990,
    KICKOUT_REASON: 4991
}


export const TYPE_DEVICES = ["Quạt", "Đèn", "Điều hòa", "Khóa cửa", "Ổ cắm"]