import { Dimensions } from 'react-native';

export const {width, height} = Dimensions.get("window")

export const scale_point = width/360

export const RESPONSE_STATUS = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400
}