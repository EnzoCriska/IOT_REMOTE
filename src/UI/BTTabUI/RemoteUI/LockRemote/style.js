import { StyleSheet } from 'react-native';
import { scale_point } from '../../../../util/value_containt/constaint';
import { APP_STYLE_COLOR, COLORS } from '../../../../util/app_style_containt/style';

export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    headerContainer: {
        backgroundColor: APP_STYLE_COLOR,
        width: '100%',
        height: 55 * scale_point,
        alignItems: 'center',
        padding: 10 * scale_point,
        flexDirection: 'row'
    },
    leftHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    midHeaderContainer: {
        width: '100%',
        position: "absolute",
    },
    qrIconStyle: {
        fontSize: 30 * scale_point,
        color: COLORS.WHITE,
    },
    textTitle: {
        color: COLORS.WHITE,
        fontSize: 20 * scale_point,
        alignSelf: "center",
    },
    remotePanel:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#99ccff",
        borderRadius: 10 * scale_point,
        margin: 10 * scale_point,
    },
    info:{
        width: "100%",
        top: 50,
        position: "absolute",
        alignItems:'center',
        justifyContent: 'center',
    },
    textInfo:{
        color: "#fff",
        fontSize: 20,
        flex:1
    },
    iconLockStyle:{
        color: "#fff",
        fontSize: 300
    }
})