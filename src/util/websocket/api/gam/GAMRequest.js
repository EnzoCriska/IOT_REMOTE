function GAM0(room_id){
    this.room_id = room_id
}

function GAM3(room_id, answer){
    this.room_id = room_id,
    this.answer = answer
}

function GAM7(room_id, user_name, password){
    this.room_id = room_id
    this.username = user_name
    this.password = password
}



module.exports.GAM0 = GAM0
module.exports.GAM7 = GAM7
module.exports.GAM3 = GAM3
