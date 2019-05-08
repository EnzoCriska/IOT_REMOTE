function MessagePacket(code, type, content, cmdType, senderId, compress, crypt) {
    let messagePacket = {
        "cmdType": cmdType,
        "crypt": crypt,
        "compress": compress,
        "length": content.length,
        "code": code,
        "type": type,
        "sender_id": senderId,
        "content": content
    };
    return messagePacket;
}

MessagePacket.Unpack = function (data) {

    let bf = data[0];
    let cmdType = bf & 0x0f;

    let crypt = ((bf & 0xff) >> 4) & 1;

    let compress = ((bf & 0xff) >> 5) & 1;

    let offset = 1;
    let length = data.readUInt32BE(offset, false);

    offset += 4;
    let code = data.toString('ascii', offset, offset + 3);
    offset += 3;

    let type = data[offset];
    offset += 1;

    let sender_id = data.readUInt32BE(offset);
    offset += 4;

    let content = data.toString('utf8', offset);

    return {
        "cmdType": cmdType,
        "crypt": crypt,
        "compress": compress,
        "length": length,
        "code": code,
        "type": type,
        "sender_id": sender_id,
        "content": content
    };

};

MessagePacket.Pack = function (packet) {


    // Logger.log("content to send: " + content);
    let content = packet.content;
    let contentSize = this.byteLength(content);

    let command = (((packet.compress << 5) & 0xf0) | ((packet.crypt << 4) & 0xf0) | (packet.cmdType & 0x0f));
    let BHEADERCOMMAND_LENGTH = 13;
    let size = BHEADERCOMMAND_LENGTH + contentSize;
    let offset = 1;
    let buffer = new Buffer(size);

    buffer[0] = command;
    buffer.writeUInt32BE(contentSize, offset, false);
    offset += 4;
    buffer.write(packet.code, offset);
    offset += 3;
    buffer[offset] = packet.type;
    offset += 1;
    buffer.writeUInt32BE(packet.sender_id, offset, true);
    offset += 4;

    buffer.write(content, offset);

    return buffer;

};

MessagePacket.byteLength = function (str) {
    // returns the byte length of an utf8 string
    var s = str.length;
    for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s += 2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }
    return s;
};

MessagePacket.CreateKey = function (sPK, n) {

    // Logger.log("Server Key = " + sPK + " nonce = " + n);

    //serverPK = AppUtils.base64ToArrayBuffer(sPK);
    //nonce = AppUtils.base64ToArrayBuffer(n);

    //var keyPair = NACL.crypto_box_keypair();

    //publicKey = keyPair.boxPk;
    //secretKey = keyPair.boxSk;


    var packet = {
        "cmdType": 0,
        "crypt": 0,
        "compress": 0,
        "length": 48,
        "code": "lgi",
        "type": 0,
        "sender_id": 24724000,
        "content": "{\"userName\":\"dautv1993\",\"userPassword\":\"123456\"}"
    };

    // var recipientKeypair = NACL.crypto_box_keypair();
    // var message = NACL.encode_utf8("Tạ Văn Dậu !");

    // var b64 = "h4npwHIOc++p+9JxIykYrlZdSXW8Fl/DRzPQVzsV3SkHkKK05V51hMKaJiic7yxrVWpoIC64jy0YBSWdbdqB0WshgbVRS/wPRO1qjTLUqYJrTXXWgelcviytS+A+d33OAKI6sx3sw8Dxoj+bVkh507qJi8tvyA+kQEfNbYfmHHuOV+vq0SyC3QEkcXAV1vPYRsu6iVB6riCLrCT5/w+08qY6UrI6/yKrGQN50agtvn46kmAzPM8Qp5Vc/cLRj2YtjAXB84Q+lcwsQ4hWYGb6CFalhF5zSeFtZ4GK77SWdTf6BcNkA3gJq1vVKvbwkYL61unZ7sW55cm0YBVJvPsYvsUE9NhzCWjqCll2P72XFaQv372a/y4TOnY5jp7C0i97Elr6qb8ORGnEleoh86fS0BEEulB53XbJTS+szmlXl0aXKXmNsbjk6DbpLS1Siog7JgwrXIjljWuUELENu7gTHRRssRrWMlZQ2zMt8GTCGhvz93R3KZJcdkUTriuRMtXO1khaAd26PcsMiZXvu2eIIFAUJkzyJY4bRkN0KPFSdc+5BZUTR1QOQZn9HC49ytoQ/2DIg6+0Xe4Dnoxu02YZDEJ2T/9Yr5OBwNjLe8ND1CYwIPTrUcEjj0K64O2hXCtAEuqnHjciW14SiUB7ORHDh57X/HNyBBvL6KYGGTEMJV9U1ltB+pohZjeEbtt+qP/KaaG1gypxWwUxMEJuEspvf56Ti/ZJnqZUSXeaoSCM7ASKMG4INjz3/8goTooFZvof7vPeUr4NiGyeo/TJnIme3smLf83zx570tptk2LIm1qcBMlYFxDoa+dkYRv9U7QI7yWoPhcy5AxB9ky1mmMgq4+qZeF6BcYSRBKQEvVBnE6WGgg28Ymy1enlsSdcrAsZC5TJy0n5JjoloQt+Q+R9+pk9Hm2OnBFZLqqBAzwtlnkUGpc5JRYRB2YT0iixP3sisejlMvjQJVjD0Rz9TgicTmg2vARvaSHILlUAslhaS37eF69bXuEVPxVMszEts2d6G5AjtBIspYPlz99NFNdmcdV3H3t2IODWpTpLtipBw1eB18/E6gzj7B7YJ0aFShuFdyNw5yPNANIpWkmatwewa7Vwidesl8w4d9loQp9sAT0S6FR6dyOPdHOE1i9NEyjmFNhmSdhnAEtX00o68pfRHmFJkgmE=";
    // var b = AppUtils.base64ToArrayBuffer(b64);


    // let t = packet.content;
    // Logger.log("type t: " + typeof t);
    // var msg = NACL.encode_utf8(t);

    // Logger.log("type msg: " + typeof msg);

    // var p = NACL.crypto_box(msg, clgtNonce, clgtPK, clientSK);

    // var str = AppUtils.arrayBufferToBase64(p);
    // Logger.log("b64 = " + str);

    // var content = AppUtils.Utf8ArrayToStr(p);
    // Logger.log("content " + content);

    // var str = "0a9ff307b1092ca9362805c167141e87ea0c541fcf251b9505157dac8c3fe9818aad0bb492b5a53b23c68f96797c31e8aef12b0829200eef4e82c806671738af0b36a9fa61bca567496a37c9fdd523280bcc9da9f05a9604b9e3fb1cfae68d0c52146e71fe860ea65eeae81b21b65e733e42a2eef0a518da76f2282d3879b427d1adb99e071a06ff8c28b0d32746170d0a8a32c591518bfe88aca074b286a4e5b19d0fadb28bd201202cd3df917fa7f469e512cf2c4703276fcb1f6f2b6251bf5598975053e6cbb9a9302006ca37419f49da9142446c23fdfdcee9d4a301e9d1a5849cae893e6c5ba11cb7188f7cc72caa93cf58e08498030ff5885c2fe7047b7bc4b5167aefb4c1070360fdcea9cb63c636c4310667f433d3e22328d44a751300f2a977ae77a69a54ae7f036875ac8f57f7539cb8ff74e7eebcbc2ac03b1f90565a10acb8e2faca38d25ccfbb2d8d64bae6940318335e2703925c9e390be103d9c8117c89fcabeb3e98bac39fd3c3fa035d64998ce56167c1f9ea5ebf24a084112504cc6247fdf4a43d0b6364ffa705e995b01d1f2cea37c773eee44fc2bc5618b45696a91e7d8c501919035923fad2c3577b7c880652a277ba90778cc8bbfbbe400a4c3761353461d43bc8203e12326ee27197b379d6e7ef4edabfba608c8d224ffc0eee21c5bd3775e8c4d96d809a409487d620b957d010a14f020dc24c63c5290d8d71b32a3ba757ad1ba15168ebe63fcbebd84265934c862b2db96d855cc0731fa35d45be44d4e5afe29c4a4a7b8982425e698113e99702529c481fb02d4399f852f7e67d09e31e091315a4bd4a641988afe3df8301a5e14df0e4ce272d835aba24c896da2922c63cb3fa061d389fda2710dbf89ed6acbe994f3a8b75bf30cf89988002ea1388340f00e97e682fd6797b0529804653169159f0e0d6c2e5ec80516140cc924bf8c83e7fe41e393a2362758cd7a711ab6f7dddda3491e7efb865f95a92e5c2811189d1b44273d94d66621c7978665e4f3b2e18855aebfdfdd53395be97e77a388766e4d70f2925993c25b32110dd4546304ae9a77930ba1ef14b07ea03640985cdbcdb7eb5e9f74864cc3051693a3b7b0fb0f658c236bb3c21eea1b40c90210086f17b4c44ea5a2ff518b2d8b5d574a95b68c8099f3d99b828d8b633d9f2d1b6cd246f75369070afe06e43a6cc18c30408f425b41d8804f6b8c53d4d1ac77f0168845004b89859";
    // var b = AppUtils.hexStringToByte(str);

    // Logger.log("nonce = " + Array.apply([], nonce).join(", "));
    // Logger.log("serverPK = " + Array.apply([], serverPK).join(", "));
    // Logger.log("secretKey = " + Array.apply([], secretKey).join(", "));
    // Logger.log("len 33 = " + b.length);

    // Logger.log("b = " + Array.apply([], b).join(", "));
    // var decoded = NACL.crypto_box_open(b, nonce, serverPK, secretKey);

    // Logger.log("decoded = " + decoded);

    // // var nonce = NACL.crypto_box_random_nonce();
    // var packet = NACL.crypto_box(message, clgtNonce, clientPK, clgtSK);

    // var decoded = NACL.crypto_box_open(packet, clgtNonce, clgtPK, clientSK);

    // Logger.log("decoded = " + decoded);

    // Logger.log("boxPk = " + NACL.to_hex(recipientKeypair.boxPk));

    // var b1 = recipientKeypair.boxSk;
    // Logger.log("boxSk = " + NACL.to_hex(b1));

    // var gt = AppUtils.arrayBufferToBase64(b1);
    // Logger.log("base64 = " + gt);

    // var bbb = AppUtils.base64ToArrayBuffer(gt);

    // Logger.log("bbb = " + bbb.length);
    // Logger.log("boxSk = " + NACL.to_hex(bbb));

    // return "12a32d9cdc807328ed5a0f2fa0cf69d25edfe39f37a8576eaa3ef7dbdb9dcb0891f466d4f5893215a5b79ea0536725e9a8092ab8304e54e899204885a0390c59";
    // var key = nacl.box.keyPair();
    // publicKey = key.publicKey;
    // secretKey = key.secretKey;
    // return publicKey.toString('hex');

    // Logger.log("serverPK: " + AppUtils.arrayBufferToBase64(serverPK));
    // Logger.log("nonce: " + AppUtils.arrayBufferToBase64(nonce));

    // Logger.log("serverPK: " + serverPK.length);
    // Logger.log("publicKey: " + publicKey.length);
    // Logger.log("secretKey: " + secretKey.length);
    // Logger.log("nonce: " + nonce.length);

    // var message = NACL.encode_utf8(sPK);
    // var packet = NACL.crypto_box(message, nonce, serverPK, secretKey);
    return {
        "data": "RaoF5TI8Ua4noIg83MzIQzEhqPAC2t2rucanxgKu4mU",
        "key": "RaoF5TI8Ua4noIg83MzIQzEhqPAC2t2rucanxgKu4mU"
    };

};

// MessagePacket.CreateCRTPacket = function(){
//     var key = nacl.box.keyPair();
//     publicKey = key.publicKey;
//     secretKey = key.secretKey;
//     var crtContentObject = {
//         'clientkey': pub.toString('hex')
//     };
//
//     var content = JSON.stringify(crtContentObject);
//     //Logger.log('content: ' + content);
//     var senderId = Date.parse(new Date()) % 100000000;
//     var messagePacket = {
//         "cmdType": 0,
//         "crypt": 0,
//         "compress": 0,
//         "length": content.length,
//         "code": 'crt',
//         "type": 0,
//         "sender_id": senderId,
//         "content": content
//     };
//     //var packedData = MessagePacket.Pack(messagePacket)
//     return messagePacket;
// };

export default MessagePacket;