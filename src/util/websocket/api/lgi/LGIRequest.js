function LGI0(userName, userPassword) {
    this.userName = userName;
    this.userPassword = userPassword;
}

function LGI1() {

}

function LGI2(userName, displayName, userPassword, captcha) {
    this.userName = userName;
    this.displayName = displayName;
    this.userPassword = userPassword;
    this.captcha = captcha;
}

function LGI4(deviceInfo) {
    this.deviceInfo = deviceInfo;
}

function LGI5(accessToken, channel) {
    this.accessToken = accessToken;
    this.channel = channel;
}

function LGI7(sessionId) {
    this.sessionId = sessionId;
}

function LGI9(userName, pin) {
    this.userName = userName;
    this.pin = pin;
}

function LGI15(token) {
    this.token = token;
}

module.exports.LGI0 = LGI0;
module.exports.LGI1 = LGI1;
module.exports.LGI2 = LGI2;
module.exports.LGI4 = LGI4;
module.exports.LGI5 = LGI5;
module.exports.LGI7 = LGI7;
module.exports.LGI9 = LGI9;
module.exports.LGI15 = LGI15;