import MessageCode from '../../MessageCode';
import APIRequestBase from '../APIRequestBase';
import CHARequest from './CHARequest';

function CHAApi(type) {
    return new APIRequestBase(MessageCode.CHA, type);
}

function RequestChatApi(roomId, message){
    let api = CHAApi(0);
    let cha0 = new CHARequest.CHA0(roomId, message)
    api.content = JSON.stringify(cha0);
    return api
}

function GetListChatApi(roomId){
    let api = CHAApi(2);
    let cha2 = new CHARequest.CHA2(roomId)
    api.content = JSON.stringify(cha2)
    return api
}

function RemoveMessageChatApi(roomId, id){
    let api = CHAApi(3)
    let cha3 = new CHARequest.CHA3(roomId, id)
    api.content = JSON.stringify(cha3)
    return api
}


CHAApi.requestChat = function(roomId, message, funcSuccess, funcError){
    let api = new RequestChatApi(roomId, message)
    api.SendRequest(funcSuccess, funcError)
}

CHAApi.getListChat = function(roomId, funcSuccess, funcError){
    let api = new GetListChatApi(roomId)
    api.SendRequest(funcSuccess, funcError)
}

CHAApi.removeMessageChat = function(roomId, id, funcSuccess, funcError){
    let api = new RemoveMessageChatApi(roomId, id);
    api.SendRequest(funcSuccess, funcError)
}

export default CHAApi;