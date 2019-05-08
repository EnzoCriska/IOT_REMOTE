import MessageCode from '../../MessageCode';
import APIRequestBase from '../APIRequestBase';
import RoomRequest from './RoomRequest';

function ROMApi(type) {
    return new APIRequestBase(MessageCode.ROM, type);
}

function GetListRoomApi(roomType) {
    let api = new ROMApi(0);
    let rom0 = new RoomRequest.ROM0(roomType);
    api.content = JSON.stringify(rom0);
    return api;
}

function JoinRoomApi(roomId, password) {
    let api = new ROMApi(1);
    let rom1 = new RoomRequest.ROM1(roomId, password);
    api.content = JSON.stringify(rom1);
    return api;
}

function LeaveRoomApi(roomId){
    let api = new ROMApi(2);
    let rom2 = new RoomRequest.ROM2(roomId);
    api.content = JSON.stringify(rom2)
    return api;
}

function CreateRoomApi(room_name, password, time, timeAnswer, category, num_question){
    let api = new ROMApi(3);
    let rom3 = new RoomRequest.ROM3(room_name, password, time, timeAnswer, category, num_question)
    api.content = JSON.stringify(rom3)
    return api
}


function GetListUserApi(roomId){
    let api = new ROMApi(10);
    let rom10 = new RoomRequest.ROM10(roomId);
    api.content = JSON.stringify(rom10)
    return api
}

ROMApi.getListRoom = function (roomType, funcSuccess, funcError) {
    let api = new GetListRoomApi(roomType);
    api.SendRequest(funcSuccess, funcError);
};

ROMApi.joinRoom = function (roomId, password, funcSuccess, funcError) {
    let api = new JoinRoomApi(roomId, password);
    api.SendRequest(funcSuccess, funcError);
};

ROMApi.leaveRoom = function(roomId, funcSuccess, funcError){
    let api = new LeaveRoomApi(roomId);
    api.SendRequest(funcSuccess, funcError)
}

ROMApi.createRoom = function (room_name, password, time, timeAnswer, category, num_question , funcSuccess, funcError){
    let api = new CreateRoomApi(room_name, password, time, timeAnswer, category, num_question);
    api.SendRequest(funcSuccess, funcError)
}



ROMApi.getListUser = function (roomId, funcSuccess, funcError){
    let api = new GetListUserApi(roomId);
    api.SendRequest(funcSuccess, funcError)
}

export default ROMApi;