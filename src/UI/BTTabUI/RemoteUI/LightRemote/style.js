import React from 'react';
import { StyleSheet } from 'react-native'
import { APP_STYLE_COLOR, COLORS } from '../../../../util/app_style_containt/style';
import { scale_point } from '../../../../util/value_containt/constaint';

export const styles  = StyleSheet.create({
    container:{
        flex:1
    },
    headerContainer:{
        backgroundColor: APP_STYLE_COLOR,
        width: '100%',
        height: 55 * scale_point,
        alignItems: 'center',
        padding: 10 * scale_point,
        flexDirection: 'row'
    },
    leftHeaderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    rightHeaderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    midHeaderContainer:{
        width: '100%',
        position: "absolute",
    },
    qrIconStyle:{
        fontSize: 30 * scale_point,
        color: COLORS.WHITE,
    },
    textTitle:{
        color: COLORS.WHITE,
        fontSize: 20 * scale_point,
        alignSelf: "center",
    },
})