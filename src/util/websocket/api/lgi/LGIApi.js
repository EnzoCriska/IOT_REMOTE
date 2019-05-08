import MessageCode from '../../MessageCode';
import APIRequestBase from '../APIRequestBase';
import LGIRequest from './LGIRequest';

function LGIApi(type) {
    return new APIRequestBase(MessageCode.LGI, type);
}

LGIApi.prototype = Object.create(APIRequestBase.prototype);


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.Login = function (userName, userPassword, funcSuccess, funcError) {
    let api = new LoginApi(userName, userPassword);
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.Logout = function (funcSuccess, funcError) {
    let api = new LogoutApi();
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.Register = function (userName, displayName, userPassword, captcha, funcSuccess, funcError) {
    let api = new RegisterApi(userName, displayName, userPassword, captcha);
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.QuickLogin = function (deviceInfo, funcSuccess, funcError) {
    let api = new QuickLoginApi(deviceInfo);
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.LoginTokenFB = function (accessToken, channel, funcSuccess, funcError) {
    let api = new LoginTokenFBApi(accessToken, channel);
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.GetRegisterCaptcha = function (funcSuccess, funcError) {
    let api = new CaptchaApi();
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.Reconnect = function (sessionId, funcSuccess, funcError) {
    let api = new ReconnectApi(sessionId);
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.ResetPass = function (userName, pin, funcSuccess, funcError) {
    let api = new ResetPassApi(userName, pin);
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


LGIApi.LoginToken = function (token, funcSuccess, funcError) {
    let api = new LoginTokenApi(token);
    console.log(token)
    api.SendRequest(funcSuccess, funcError);
};


//-------------------------------------------------------------------------------------------------------------------------------------------//


function LoginApi(userName, userPassword) {
    var api = new LGIApi(0);
    var lgi0 = new LGIRequest.LGI0(userName, userPassword);
    api.content = JSON.stringify(lgi0);
    return api;
}

function LogoutApi() {
    var api = new LGIApi(1);
    var lgi1 = new LGIRequest.LGI1();
    api.content = JSON.stringify(lgi1);
    return api;
}

function RegisterApi(userName, displayName, userPassword, captcha) {
    var api = new LGIApi(2);
    var lgi2 = new LGIRequest.LGI2(userName, displayName, userPassword, captcha);
    api.content = JSON.stringify(lgi2);
    return api;
}

function QuickLoginApi(deviceInfo) {
    var api = new LGIApi(4);
    var lgi4 = new LGIRequest.LGI4(deviceInfo);
    api.content = JSON.stringify(lgi4);
    return api;
}

function LoginTokenFBApi(accessToken, channel) {
    var api = new LGIApi(5);
    var lgi5 = new LGIRequest.LGI5(accessToken, channel);
    api.content = JSON.stringify(lgi5);
    return api;
}

function CaptchaApi() {
    var api = new LGIApi(6);
    api.content = '{}';
    return api;
}

function ReconnectApi(sessionId) {
    var api = new LGIApi(7);
    var lgi7 = new LGIRequest.LGI7(sessionId);
    api.content = JSON.stringify(lgi7);
    return api;
}

function ResetPassApi(userName, token) {
    var api = new LGIApi(9);
    var lgi9 = new LGIRequest.LGI9(userName, token);
    api.content = JSON.stringify(lgi9);
    return api;
}

function LoginTokenApi(token) {
    var api = new LGIApi(15);
    var lgi15 = new LGIRequest.LGI15(token);
    api.content = JSON.stringify(lgi15);
    return api;
}

export default LGIApi;