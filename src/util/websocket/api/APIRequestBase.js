import MessagePacket from "../MessagePacket";
import Network from "../Network";
import DataProcessor from "../DataProcessor";

function APIRequestBase(code, type) {
    this.code = code;
    this.type = type;
}

APIRequestBase.prototype.SendRequest = function (funcSuccess, funcError) {
    let senderId = new Date().getTime() % 100000000;
    let compress = 0;
    let crypt = 0;
    let request = new MessagePacket(this.code, this.type, this.content, 0, senderId, compress, crypt);
    let packedData = MessagePacket.Pack(request);
    if (funcError) DataProcessor.AddResponseHandler(senderId, funcSuccess, funcError);
    else DataProcessor.AddResponseHandler(senderId, funcSuccess, this.ResponseError.bind(this));
    Network.Send(packedData);
};

APIRequestBase.prototype.ResponseError = function (data) {
    console.log('APIRequestBase process error response, code: ' + data.code + ', message:' + data.message);
};

export default  APIRequestBase;