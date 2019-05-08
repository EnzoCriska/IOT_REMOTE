// Get List Room
function ROM0(roomType) {
    this.room_type = roomType;
}

// Join room
function ROM1(roomId, password) {
    this.room_id = roomId;
    this.password = password;
}

// Leave
function ROM2(roomId) {
    this.room_id = roomId;
}

//Create Room
function ROM3(room_name, password, time, timeAnswer, category, num_question){
    this.name = room_name
    this.password = password
    this.time = time
    this.timeAnswer = timeAnswer
    this.category = category,
    this.num_question = num_question
}


function ROM10(roomId){
    this.room_id = roomId
}

module.exports.ROM0 = ROM0;
module.exports.ROM1 = ROM1;
module.exports.ROM2 = ROM2;
module.exports.ROM3 = ROM3;
module.exports.ROM10 = ROM10;