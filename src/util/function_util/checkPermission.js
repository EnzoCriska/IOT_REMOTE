import { PermissionsAndroid } from 'react-native';

export async function requesLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'ACCESS_FINE_LOCATION Permission',
                'message': 'ACCESS_FINE_LOCATION needs access to your LOCATION ' +
                    'so you can take awesome Location.'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the Location")
        } else {
            console.log("Location permission denied")
        }
        const granted2 = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                'title': 'ACCESS_FINE_LOCATION Permission',
                'message': 'ACCESS_FINE_LOCATION needs access to your LOCATION ' +
                    'so you can take awesome Location.'
            }
        )
        if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the Location")
        } else {
            console.log("Location permission denied")
        }
    } catch (err) {
        console.log(err)
    }
}
