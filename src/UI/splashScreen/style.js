import React from 'react'
import { StyleSheet } from 'react-native';
import { APP_STYLE_COLOR, COLORS } from '../../util/app_style_containt/style';
import { scale_point } from '../../util/value_containt/constaint';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_STYLE_COLOR,
        alignItems: 'center',
    },
    appname: {
        color: COLORS.WHITE,
        fontSize: 20,
        marginTop: 5 * scale_point,
        fontWeight: 'bold',
    },
    appslogan: {
        color: COLORS.WHITE,
        fontSize: 16,
        marginTop: 5 * scale_point
    },
    loading: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    
})