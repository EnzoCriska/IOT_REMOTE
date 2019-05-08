// let DataProcessor = require('./DataProcessor');
// let Broadcast = require('./Broadcast');
// let MessagePacket = require('./MessagePacket');

import MessageCode from './MessageCode';
import DataProcessor from './DataProcessor';
import Broadcast from './Broadcast';
import MessagePacket from './MessagePacket';
// import constant from '../constant/constant';

// import CRTApi from '../websocket/api/crt/CRTApi';
// import LGIApi from '../websocket/api/lgi/LGIApi';
// import { ws } from '../Constanst';
// import { alert } from '../Component Util/alert';
import Toast  from 'react-native-simple-toast';

const uuidv1 = require('uuid/v1');

let Network = (function () {

    let instance;

    function Network() {

    }

    Network.prototype.Init = function (serverAddress, port, wsPath, protocol) {
        this.uuid = uuidv1();
        // this._serverAddress = serverAddress;
        // this._port = port;
        // this._protocol = protocol;
        // this._url = this._protocol + "://" + this._serverAddress + ":" + this._port + "/" + wsPath;
        this._url = "wss://35.247.152.248/ws/channels/023e85fd-eb09-417f-af73-1985e281c295/messages?authorization=bf054c59-f401-4f84-b7fa-e148f50181f7"
        // DataProcessor.AddPushHandler(this.uuid, 'png', 0, this.PNGProcess.bind(this));
        // DataProcessor.AddPushHandler(this.uuid, 'hux', 11, this.HUXProcess.bind(this));
        // DataProcessor.AddPushHandler(this.uuid, 'sys', 3, this.KickOutProcess.bind(this));
        // DataProcessor.AddPushHandler(this.uuid, 'sys', 99, this.ReceiveMes.bind(this));
        // DataProcessor.AddPushHandler(this.uuid, 'inf', 0, this.UserInfoProcess.bind(this));
        // DataProcessor.AddPushHandler(this.uuid, 'not', 0, this.Notification.bind(this));
        // DataProcessor.AddPushHandler(this.uuid, 'pip', 0 , this.PogProcess.bind(this));
        // DataProcessor.AddPushHandler(this.uuid, MessageCode.CRT, 0, this.onCRTPush.bind(this));
        console.log('Network init: ' + this._url);
    };

    // Network.prototype.onCRTPush = function (data) {
    //     console.log("onCRTPush: " + JSON.stringify(data));
    //     let serverPK = data.k;
    //     let nonce = data.c;
    //     CRTApi.SendKey(serverPK, nonce, this.onSendKeyResponse.bind(this));
    // };

    // Network.prototype.onSendKeyResponse = function (data) {
    //     console.log('onSendKeyResponse: ' + JSON.stringify(data));
    //     LGIApi.LoginToken(this._token, this.onLoginResponse.bind(this), this.onLoginErrorResponse.bind(this));
    // };

    // Network.prototype.onLoginResponse = function (data) {
    //     console.log("onLoginResponse: " + JSON.stringify(data));
    // };

    // Network.prototype.onLoginErrorResponse = function (data) {
    //     console.log("onLoginErrorResponse: " + JSON.stringify(data));
    // };

    Network.prototype.ReceiveMes = function (data) {
        console.log("ReceiveMes: " + JSON.stringify(data));
    };

    Network.prototype.Notification = function (data) {
        console.log("Notification: " + JSON.stringify(data));
    };

    Network.prototype.UserInfoProcess = function (data) {
        console.log("UserInfoProcess: " + JSON.stringify(data));
        Broadcast.UpdateUserInfo();
        Broadcast.UpdateMoney();
    };

    Network.prototype.KickOutProcess = function (data) {
        console.log("KickOutProcess: " + JSON.stringify(data));
    };

    Network.prototype.HUXProcess = function (data) {
        Broadcast.UpdateJackpot(data);
    };

    Network.prototype.Connect = function () {

        // this._token = token;
        let _this = this;
        this._socket = new WebSocket(this._url);
        console.log("Start connect to : " + this._url);
        this._socket.binaryType = 'arraybuffer';

        this._socket.onopen = function (ev) {
            console.log('Network onopen: ' + ev);
            Toast.show("connected")
        };

        this._socket.onmessage = function (ev) {
            let data = new Buffer(new Uint8Array(ev.data), 'utf8', 0);
            let packet = MessagePacket.Unpack(data);
            _this.OnMessage(packet);
        };

        this._socket.onclose = function (ev) {
            DataProcessor.Destroy();
            console.log('Network onclose: ' + ev.code + " reason: " + ev.reason);
            if (ws.LOGOUT_REASON !== ev.code && ws.KICKOUT_REASON !== ev.code) {
                _this.Connect();
            }else{
                alert("THÔNG BÁO!", "Lỗi kết nối, vui lòng thử lại sau!")
            }
           
        };

        this._socket.onerror = function (ev) {
            console.log('Network onerror: ' + ev.toString());
        };

    };

    Network.prototype.OnMessage = function (packet) {
        DataProcessor.ProcessIncomeData(packet);
    };

    Network.prototype.Disconnect = function () {
        if (this._socket !== null && this._socket !== undefined) {
            try {
                this._socket.close(ws.LOGOUT_REASON);
            } catch (e) {
                console.log("e", e);
            }
        }
        DataProcessor.Destroy();
    };

    Network.prototype.Send = function (data) {
        this._socket.send(data);
    };

    Network.prototype.PNGProcess = function (packet) {
        // console.log("packet = " + JSON.stringify(packet));
        let content = "{}";
        let senderId = Date.parse(new Date()) % 100000000;
        let messagePacket = {
            "cmdType": 0,
            "crypt": 0,
            "compress": 0,
            "length": content.length,
            "code": 'crt',
            "type": 0,
            "sender_id": senderId,
            "content": content
        };
        let pngPacked = MessagePacket.Pack(messagePacket);
        this._socket.send(pngPacked);
    };


    Network.prototype.PogProcess = function (packet) {
        // console.log("PONG = " + JSON.stringify(packet));
        let content = "{}";
        let senderId = Date.parse(new Date()) % 100000000;
        let messagePacket = {
            "cmdType": 0,
            "crypt": 0,
            "compress": 0,
            "length": content.length,
            "code": 'pip',
            "type": 0,
            "sender_id": senderId,
            "content": content
        };
        let pngPacked = MessagePacket.Pack(messagePacket);
        this._socket.send(pngPacked);
    };

    return {
        getInstance: function () {
            if (instance == null) {
                instance = new Network();
                instance.constructor = null;
            }
            return instance;
        }
    };

})();

let NetworkInstance = Network.getInstance();
export default NetworkInstance;