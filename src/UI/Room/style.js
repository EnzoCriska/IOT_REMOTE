import { StyleSheet } from 'react-native';
import { scale_point, width } from '../../util/value_containt/constaint';
import { APP_STYLE_COLOR, COLORS } from '../../util/app_style_containt/style';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contianerNothing:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatlist:{
        flex: 1, marginRight: 10 * scale_point
    },
    itemContainerON:{
        width: (width)/3 * scale_point  - 35* scale_point,
        height: (width)/3 * scale_point  -35* scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "pink",
        marginLeft: 10 * scale_point,
        marginTop: 10 * scale_point,
        borderRadius: 5 * scale_point,
    },
    itemContainerOFF:{
        width: (width)/3 * scale_point  - 35* scale_point,
        height: (width)/3 * scale_point  -35* scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#bcbcbc",
        marginLeft: 10 * scale_point,
        marginTop: 10 * scale_point,
        borderRadius: 5 * scale_point,
    },
    iconItemStyle: {
        fontSize: 30 * scale_point,
        color: APP_STYLE_COLOR,
        margin: 10 * scale_point
    },
    textItemName:{
        color: APP_STYLE_COLOR,
        fontSize: 16 * scale_point
    },
    textNothing:{
        fontSize: 16,
        color: COLORS.GREY,
    },
    iconNothing:{
        fontSize: 50 * scale_point,
        color :APP_STYLE_COLOR,
        margin:  20 * scale_point
    }
})