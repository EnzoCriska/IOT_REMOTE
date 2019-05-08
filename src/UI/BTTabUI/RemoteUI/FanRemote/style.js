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
    remotepanel: {
        flex: 1,
        margin: 10 * scale_point,
        borderRadius: 10 * scale_point,
        backgroundColor: "#99ddff",
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinfo:{
        fontSize: 20,
        color: "#fff",
        marginVertical:5 * scale_point,
    },
    remoteContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    strength: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    bottomPower: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonStrength: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "grey",
        margin: 10 * scale_point,
        width: 50 * scale_point,
        height: 50 * scale_point,
        borderRadius: 25 * scale_point
    },
    buttonStrengthOn:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff6600",
        margin: 10 * scale_point,
        width: 50 * scale_point,
        height: 50 * scale_point,
        borderRadius: 25 * scale_point
    },
    bottomlevelbtn:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "grey",
        marginTop: -10 * scale_point,
        marginHorizontal: 10 * scale_point,
        width: 50 * scale_point,
        height: 50 * scale_point,
        borderRadius: 25 * scale_point
    },
    bottomlevelbtnOn:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff6600",
        marginTop: -10 * scale_point,
        marginHorizontal: 10 * scale_point,
        width: 50 * scale_point,
        height: 50 * scale_point,
        borderRadius: 25 * scale_point
    },
    powerBtn: {
        width: 100 * scale_point,
        height: 60 * scale_point,
        borderTopLeftRadius: 35 * scale_point,
        borderTopRightRadius: 35 * scale_point,
        borderBottomLeftRadius: 10 * scale_point,
        borderBottomRightRadius: 10 * scale_point,
        backgroundColor: "grey",
        justifyContent:"center",
        alignItems: 'center'
    },
    powerBtnOn:{
        width: 100 * scale_point,
        height: 60 * scale_point,
        borderTopLeftRadius: 35 * scale_point,
        borderTopRightRadius: 35 * scale_point,
        borderBottomLeftRadius: 10 * scale_point,
        borderBottomRightRadius: 10 * scale_point,
        backgroundColor: "#ff6600",
        justifyContent:"center",
        alignItems: 'center'
    },
    textLevel:{
        color: "#fff",
        fontWeight: 'bold',
    },
    iconPower:{
        color: "#fff",
        fontSize: 30
    }

})