import { RESPONSE_STATUS } from "../value_containt/constaint";
import { Toast } from 'native-base';

export function alerMsgCallApi(res) {

    const code = res.status

    switch (code) {
        case RESPONSE_STATUS.SUCCESS:
            Toast.show({
                text: "Success!",
                type: "success"
            })
            break;

        case RESPONSE_STATUS.NOT_FOUND:
            Toast.show({
                text: "Resource not found!",
                type: "danger"
            })
            break;

        case RESPONSE_STATUS.UNAUTHORIZED:
            Toast.show({
                text: "Invalid $ACCESS_TOKEN",
                type: "danger"
            })
            break;

        case RESPONSE_STATUS.BAD_REQUEST:
            Toast.show({
                text: "Invalid URL, request parameters or body",
                type: "danger"
            })
            break;
    }
}