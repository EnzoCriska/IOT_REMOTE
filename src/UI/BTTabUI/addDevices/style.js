import { StyleSheet } from 'react-native';
import { APP_STYLE_COLOR, COLORS } from '../../../util/app_style_containt/style';
import { scale_point } from '../../../util/value_containt/constaint';


export const styles = StyleSheet.create({
    container: {
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
    addbodyContainer:{
        backgroundColor: "#b3e6ff",
        margin: 20 * scale_point,
        borderRadius: 5 * scale_point,
        flex:1,
        height:"100%",
        justifyContent: 'center',
        alignItems: 'center',
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
    selectionContainer:{
        width: "90%",
        flexDirection:'row',
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 10 * scale_point,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5 * scale_point,
        marginBottom: 10 * scale_point,
    },
    categorySelect:{
        height: 40 * scale_point,
        width:'90%',
        marginTop: -10 * scale_point,
        marginBottom: 15* scale_point
    },
    textInput:{
        flex:1,
        marginHorizontal: 5 * scale_point,
    },
    addDeviceBtn:{
        width: '90%',
        height: 50 * scale_point,
        backgroundColor: "green",
        borderRadius: 5 * scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20 * scale_point
    },
    addRoomIcon:{
        fontSize: 30,
        color: APP_STYLE_COLOR,
        marginLeft: 10 * scale_point
    },
})