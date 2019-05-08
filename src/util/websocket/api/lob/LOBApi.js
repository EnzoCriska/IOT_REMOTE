
import APIRequestBase from '../APIRequestBase';
import MessageCode from '../../MessageCode';
import LOBRequest from './LOBRequest';

function LOBApi(type){
    return new APIRequestBase(MessageCode.LOB, type)
}

function ReqNextGame(){
    let api = LOBApi(0);
    let lob0 = new LOBRequest.LOB0()
    api.content = JSON.stringify(lob0)
    return api
}

LOBApi.requestTimeNextGame =  function(funcSuccess, funcError){
    let api = new ReqNextGame()
    api.SendRequest(funcSuccess, funcError)

}

export default LOBApi