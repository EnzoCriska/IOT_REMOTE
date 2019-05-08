import MessageCode from '../../MessageCode';
import APIRequestBase from '../APIRequestBase';
import GAMRequest from './GAMRequest';

function GAMApi(type){
    return new APIRequestBase(MessageCode.GAM, type)
}

function StartGameReqApi(room_id){
    let api = GAMApi(0)
    let gam0 = new GAMRequest.GAM0(room_id)
    api.content = JSON.stringify(gam0)
    return api
}

function ReqSendAnswerApi(room_id, answer){
    let api = GAMApi(3);
    let gam3 = new GAMRequest.GAM3(room_id, answer)
    api.content = JSON.stringify(gam3)
    return api
}

function InviteFriendReqApi(room_id, user_name, password){
    let api = GAMApi(7)
    let gam7 = new GAMRequest.GAM7(room_id, user_name, password)
    api.content = JSON.stringify(gam7)
    return api
}

GAMApi.startGame = function(room_id, funcSuccess, funcError){
    let api = StartGameReqApi(room_id)
    api.SendRequest(funcSuccess, funcError)
}

GAMApi.reqSendAnswerApi = function (room_id, answer, funcSuccess, funcError){
    let api = ReqSendAnswerApi(room_id, answer)
    api.SendRequest(funcSuccess, funcError)
}

GAMApi.inviteFriend = function(room_id, user_name, password, funcSuccess, funcError){
    let api = InviteFriendReqApi(room_id, user_name, password)
    api.SendRequest(funcSuccess, funcError)
}

export default GAMApi;