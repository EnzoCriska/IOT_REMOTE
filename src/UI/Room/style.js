import { StyleSheet } from 'react-native';
import { scale_point, width } from '../../util/value_containt/constaint';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist:{
        flex: 1, marginRight: 10 * scale_point
    },
    itemContainerON:{
        width: (width)/3 * scale_point  - 30* scale_point,
        height: (width)/3 * scale_point  -30* scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green",
        marginLeft: 10 * scale_point,
        marginTop: 10 * scale_point,
        borderRadius: 5 * scale_point,
    },
    itemContainerOFF:{
        width: (width)/3 * scale_point  - 30* scale_point,
        height: (width)/3 * scale_point  -30* scale_point,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "pink",
        marginLeft: 10 * scale_point,
        marginTop: 10 * scale_point,
        borderRadius: 5 * scale_point,
    }
})