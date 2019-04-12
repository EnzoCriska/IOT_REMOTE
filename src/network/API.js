import Axios from "axios";
import { BASE_URL, CONSTANT } from './constant';


export function getStatusWeather (lat, lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=17b3ac29ca8c3bbdc427123e277b022e`
    console.log("CALL TO API: " + url)
    return Axios.get(url).then(res =>res.data)
}

export function loginApi(username, password){
    const body = {
        username: username,
        password: password
    }
    return Axios.post(BASE_URL+ CONSTANT.API + CONSTANT.AUTH + CONSTANT.LOGIN,body)
                .then(res => {
                    return res
                }).catch(err => {
                    console.log("ERROR")
                    console.log(err)
                })
}