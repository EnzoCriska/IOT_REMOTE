import { StyleSheet } from 'react-native';
import { APP_STYLE_COLOR } from '../../util/app_style_containt/style';
import { scale_point } from '../../util/value_containt/constaint';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    headerContainer:{
        backgroundColor: APP_STYLE_COLOR,
        width: '100%',
        height: 55 * scale_point
    },
    weatherContainer:{
        borderRadius: 5 * scale_point,
        borderColor: APP_STYLE_COLOR,
        borderWidth: 2,
        width: '85%',
        height: 120 * scale_point,
        marginTop: 10 * scale_point,
    },
    iconweather:{
        height:80* scale_point,
        width:100* scale_point,
    },
    showWeather:{
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWeather:{
        flex:1,
        textAlign: 'center'
    },
    textCountry:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    bodyContainer:{
        flex:1,
        width:"100%", 

    }

})