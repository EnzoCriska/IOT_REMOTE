import { StyleSheet } from 'react-native';
import { scale_point } from '../../../util/value_containt/constaint';

export const styles = StyleSheet.create({
    pieDevice:{
        width: "100%",
        height: 300,
        backgroundColor: "#00ace6",
        borderRadius: 5 * scale_point,
        marginBottom: 10 * scale_point,
        padding: 10,
    },
    titleText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5 * scale_point,
    }
})