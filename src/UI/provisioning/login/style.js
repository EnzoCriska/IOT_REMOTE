import { StyleSheet } from 'react-native';
import { COLORS, APP_STYLE_COLOR } from '../../../util/app_style_containt/style';
import { scale_point } from '../../../util/value_containt/constaint';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: APP_STYLE_COLOR,
        alignItems: 'center',
    },

    formInputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width: "90%",
        flexDirection:'row',
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 10 * scale_point,
        alignItems: 'center',
        borderRadius: 5 * scale_point,
        marginBottom: 10 * scale_point,
    },
    textInput:{
        flex:1,
        marginHorizontal: 5 * scale_point,
    },
    bottonContainer:{
        width: '90%',
        flexDirection: "row",
    },

    register:{
        paddingVertical: 10 * scale_point,
        flex:1,
        borderRadius: 5 * scale_point,
        backgroundColor: COLORS.REGISTER_BACKGROUD_BUTTON,
        marginRight: 5 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login:{
        paddingVertical: 10 * scale_point,
        flex:1,
        borderRadius: 5 * scale_point,
        backgroundColor: COLORS.LOGIN_BACKGROUD_BUTTON,
        marginLeft: 5 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color: COLORS.TEXT_BOTTON_LOGIN, 
        fontSize: 18,
        fontWeight: 'bold',
    },
    textRegister:{
        color: COLORS.TEXT_BOTTON_REGISTER, 
        fontSize: 18,
        fontWeight: 'bold',
    }
})