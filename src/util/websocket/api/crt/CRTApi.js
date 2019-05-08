import MessagePacket from "../../MessagePacket";
import APIRequestBase from "../APIRequestBase";
import CRTRequest from "./CRTRequest";
import MessageCode from "../../MessageCode";

function CRTApi(type) {
    return new APIRequestBase(MessageCode.CRT, type);
}

CRTApi.prototype = Object.create(APIRequestBase.prototype);

CRTApi.SendKey = function (serverPK, nonce, callback) {
    var key = MessagePacket.CreateKey(serverPK, nonce);
    var sendKeyApi = new SendKeyApi(key.key, key.data);
    sendKeyApi.SendRequest(callback);
};

function SendKeyApi(key, handshake) {
    console.log("client key = " + key + " handshake = " + handshake);
    let api = new CRTApi(0);
    let request = new CRTRequest.CRT0(key, handshake);
    api.content = JSON.stringify(request);
    return api;
}

export default CRTApi;