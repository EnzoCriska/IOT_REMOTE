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
    bodyRemote:{
        flex:1,
        margin: 20 * scale_point,
        backgroundColor: APP_STYLE_COLOR,
        borderRadius: 5 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
    },
    powerContainer:{
        width:"100%",
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    poweroffBtn:{
        justifyContent:'center',
        alignItems:"center",
        width: 50 * scale_point,
        height: 50 * scale_point,
        borderRadius: 25 * scale_point,
        backgroundColor: "#fff",
        margin: 20 * scale_point
    },
    iconPoweroffStyle:{
        fontSize: 30 * scale_point,
        color: "grey"
    },
    iconLightContainer:{
        justifyContent:'center',
        alignItems:"center",
        width: 50 * scale_point,
        height: 50 * scale_point,
        borderRadius: 25 * scale_point,
        backgroundColor: "#fff",
        margin: 20 * scale_point,
        alignSelf:'flex-end'
    },
    colorPickerContainer:{
        width: 300 * scale_point,
        height: 300 * scale_point,
        justifyContent:"center",
        alignItems: 'center',
    },
    colorPicker:{
        width: "90%",
        margin:20 * scale_point,
    },
    thumStylePicker:{
        height: 10, 
        width: 10, 
        borderRadius: 10
    },
    sliderContainer:{
        width: "100%",
        flexDirection:'row',
        alignItems: 'center',
    },
    outContainer:{
        width: "10%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    midContainer:{
        width: '80%',
        // height: 20,
    },
    trackStyle:{
        width: "100%",
    }
})