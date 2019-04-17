import Axios from "axios";
import { BASE_URL, CONSTANT } from './constant';
const M_BASE = "http://206.189.83.245"

const headers = {
  'Content-Type' : 'application/json'
}

export function getStatusWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=17b3ac29ca8c3bbdc427123e277b022e`
  console.log("CALL TO API: " + url)
  return Axios.get(url).then(res => res.data)
}

export function registerApi(username, password){
  return Axios.post(
    M_BASE + "/users",
    {"email":username, "password":password},
    {headers: headers}
  ).then(res => res)
  .catch(err => {
    console.log("REGISTER FAIL ")
    console.log(err)
  })
}

export function loginApi(username, password) {

  return Axios.post(
    M_BASE  + "/tokens",
    {
      email: username,
      password: password
    },
    {headers: headers}
  ).then(res => res)
  .catch(err => {
    console.log("CATCH")
    console.log(err)
  })
}

