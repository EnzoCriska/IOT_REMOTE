import React from 'react'
import { StyleSheet } from 'react-native';
import { scale_point } from '../../../../util/value_containt/constaint';
import { APP_STYLE_COLOR, COLORS } from '../../../../util/app_style_containt/style';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarStyle: {
        margin: 30 * scale_point
    },
    userNameStyle: {
        fontSize: 16 * scale_point,
        color: APP_STYLE_COLOR,
        margin: 30 * scale_point
    },
    containerLogout: {
        width: 200 * scale_point,
        height: 50 * scale_point,
        backgroundColor: COLORS.LOGIN_BACKGROUD_BUTTON,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5 * scale_point,
        borderRadius: 10 * scale_point,
    },
    textLogout: {
        fontSize: 18 * scale_point,
        fontWeight: 'bold',
        color: "#FFF",
        width:"100%",
        position: "absolute",
        textAlign: 'center'
    },
    iconLogout:{
        color: "#fff",
        fontSize: 30
    },
    copyrightContainer:{
        alignItems:'center',
        bottom:10 * scale_point,
        position: "absolute",
        justifyContent:'center',
        alignItems:'center',
    },
    copytext:{
        fontStyle: "italic"
    },
    uetext:{

    },
    vnutext:{
        fontWeight:'bold'
    }
})