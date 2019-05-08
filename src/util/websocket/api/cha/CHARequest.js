function CHA0(roomId, message){
    this.room_id = roomId
    this.message = message
}

function CHA2(roomId){
    this.room_id = roomId
}

function CHA3(roomId, messageId){
    this.room_id = roomId,
    this.id = messageId
}

module.exports.CHA0 = CHA0;
module.exports.CHA2 = CHA2;
module.exports.CHA3 = CHA3;