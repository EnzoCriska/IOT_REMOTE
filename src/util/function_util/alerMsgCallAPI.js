import { RESPONSE_STATUS } from "../value_containt/constaint";
import { Toast } from 'native-base';
import { Alert } from 'react-native';

export function alerMsgCallApi(self, res) {
    console.log(["ALERT", res])
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

        case RESPONSE_STATUS.REFRESH_TOKEN:
            console.log("REFRESH TOKEN")
            Toast.show({
                text: "Hết phiên đăng nhập, vui lòng đăng nhập lại",
                type: "warning"
            })
            self.navigation.navigate("login")
            break;

        case RESPONSE_STATUS.EXISTS_ACCOUNT:
            Alert.alert(
                "Đăng ký thất bại!",
                "Email đã được đăng ký cho một tài khoản trước đó, vui lòng thử lại với một email khác!"
            )
            break;
    }
}