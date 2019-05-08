function CRT0(clientkey, handshake) {

    this.clientkey = clientkey;
    this.handshake = handshake;
    this.deviceProfile = {
        "deviceId": "xyz",
        "productId": "com.game.taiphu",
        "productName": "taiphu",
        "osVersion": "cc.sys.osVersion",
        "osName": "web",
        "productVersion": "1.0.0",
        "brand": "MS-7B61 (Micro-Star International Co., Ltd.)",
        "model": "MS-7B61 (Micro-Star International Co., Ltd.)",
        "screenWidth": 1233,
        "screenHeight": 694,
        "version": "1"
    };

    let platform = "web";
    this.utmData = {
        "listQuere": {},
        "channel": "taiphu",
        "sub_channel": "default",
        "utm_source": "",
        "utm_campaign": "utm_campaign",
        "clientInfo": "",
        "platform": platform,
        "platformVersion": "",
        "device_ID": "device_ID",
        "utm_medium": "",
        "utm_term": "",
        "utm_content": "",
        "MCC": "",
        "MNC": "",
        "macAddress": "",
        "sim_ID": ""
    };
    this.ct = '';
}

// export default CRT0;
module.exports.CRT0 = CRT0;