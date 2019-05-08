import { StyleSheet } from 'react-native';
import { APP_STYLE_COLOR, COLORS } from '../../../../util/app_style_containt/style';
import { scale_point } from '../../../../util/value_containt/constaint';

export const styles = StyleSheet.create({
    container: {
        flex: 1
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
    remotePanel: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#99ccff",
        borderRadius: 10 * scale_point,
        margin: 10 * scale_point,
        paddingVertical: 10 * scale_point,
    },
    info: {
        height: 200 * scale_point,
        width: "85%",
        borderRadius: 5 * scale_point,
        borderWidth: 2,
        borderColor: "#fff",
        justifyContent: 'center',
        alignItems: "center"
    },
    remote: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    hafpart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modeoff: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "grey",
        bottom: -30 * scale_point,
        justifyContent: "center",
        alignItems: "center"
    },
    modeOn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#ff6600",
        bottom: -30 * scale_point,
        justifyContent: "center",
        alignItems: "center"
    },
    modeIcon: {
        color: "#fff",
        fontSize: 30
    },
    bottomleft: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30 * scale_point
    },
    bottomleftOn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#ff6600",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30 * scale_point
    },
    topbtn: {
        width: 50 * scale_point,
        height: 50 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#5cd65c",
        margin: 10 * scale_point,
        borderTopLeftRadius: 5 * scale_point,
        borderTopRightRadius: 5 * scale_point,
    },
    downBtn:{
        width: 50 * scale_point,
        height: 50 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#5cd65c",
        margin: 10 * scale_point,
        borderBottomLeftRadius: 5 * scale_point,
        borderBottomRightRadius: 5 * scale_point,
    },
    textinfo:{
        color: "#fff",
        fontSize: 20
    },
    bottomContainer:{
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    powerBtnOn:{
        width: 150 * scale_point,
        height: 50 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#5cd65c",
        borderRadius: 10 * scale_point
    },
    poweroff:{
        width: 150 * scale_point,
        height: 50 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"grey",
        borderRadius: 10 * scale_point
    }
})