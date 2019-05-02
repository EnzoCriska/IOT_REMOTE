import { GETTING_DEVICES, GET_SUCCESS_DEVICES, GET_FAIL_DEVICES, DELETED_DEVICE } from "../util/value_containt/actions_type";


const APP_STATE = {
    devices: [],
    rooms: [{ name: "Phòng khách", id: 10 }, { name: "Phòng ngủ", id: 11 }],
    isLoading: false,
    error: ''
}

export default (state = APP_STATE, action) => {
    switch (action.type) {
        case GETTING_DEVICES:
            return {
                ...state,
                isLoading: true,
            }
        case GET_SUCCESS_DEVICES:
            var tpmRooms = state.rooms
            var things = action.payload
            for (let i = 0; i < things.length; i++) {
                let found = tpmRooms.find((element) => {
                    return element.name === things[i].metadata.room.name
                })
                if (!found) {
                    tpmRooms.push(things[i].metadata.room)
                }
            }


            var newState = {
                ...state,
                isLoading: false,
                devices: things,
                rooms: tpmRooms
            }

            console.log(newState)
            return newState
        case GET_FAIL_DEVICES:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        case DELETED_DEVICE:
            var tmpDevices = state.devices
            for (let i = 0; i < tmpDevices.length; i++) {
                if (tmpDevices[i].id === action.payload) {
                    tmpDevices.splice(i, 1)
                    break;
                }
            }
            var tmpRooms = state.rooms
            var roomNull = []
            for (let i = 0; i < tmpRooms.length; i++) {
                let found = tmpDevices.find((element) => {
                    return element.metadata.room.name === tmpRooms[i].name
                })
                if (!found) tmpRooms.splice(i, 1)
            }
            return {
                ...state,
                devices: tmpDevices,
                rooms: tmpRooms
            }

        default: return state
    }
}