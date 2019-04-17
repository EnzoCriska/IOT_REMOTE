import { StyleSheet } from 'react-native';
import { APP_STYLE_COLOR, COLORS } from '../../../util/app_style_containt/style';
import { scale_point } from '../../../util/value_containt/constaint';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: APP_STYLE_COLOR,
        width: '100%',
        height: 55 * scale_point,
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10 * scale_point,
    },
    rightHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10 * scale_point,
    },
    midHeaderContainer: {
        width: '100%',
        position: "absolute",
    },
    textTitle: {
        color: COLORS.WHITE,
        fontSize: 20 * scale_point,
        alignSelf: "center",
    },
    backContainer: {
        justifyContent: 'center',
    },
    backArrowIcon: {
        width: 50,
        color: COLORS.WHITE
    },
    connectedText:{
        color: COLORS.WHITE,
        fontSize: 20
    },
    deviceConnect:{
        width: "95%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "green",
        justifyContent:'center'
    },
    bodyContainer:{
        flex:1,
        width: "100%",
        
    },
    textBodySeg:{
        fontSize: 18,
        color: "blue",
        marginLeft: 10 * scale_point,
    },
    textNothing: {
        color: "grey",
        fontSize: 16,
        marginLeft:  20 * scale_point
    },
    cardView:{
        backgroundColor: "#bfe6ff",
        marginTop: 10 * scale_point,
        width: "95%",
        padding: 5 * scale_point,
        borderRadius: 5 * scale_point,
    },
    bleDisableView:{
        width:"100%",
        alignItems: 'center'
    },
    itemDivecesContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 50 * scale_point
    },
    leftItem:{
        flex:1,
        height: "100%",
        justifyContent:"center",
        alignItems: 'center',
    },
    iconBle:{
        fontSize: 20,
    },
    rightItem:{
        flex:3,
        height: "100%",
        justifyContent:'center'

    }
})