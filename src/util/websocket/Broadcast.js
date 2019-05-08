// import NetworkInstance from "./Network";

function BroadcastListener(name, key, func) {
    this.name = name;
    this.key = key;
    this.func = func;
}

let Broadcast = (function () {

    let instance;
    let listHandlerBroadcast = [];
    let UpdateMoneyKey = 'UpdateMoney';
    let UpdateJackpotKey = 'UpdateJackpot';
    let UpdateUserInfoKey = 'UpdateUserInfo';

    function Broadcast() {
    }

    //------------------------------------------------------------------------------------------------------------------//

    Broadcast.prototype.RemovePush = function (pushName, key) {
        for (let i = 0; i < listHandlerBroadcast.length; i++) {
            if (listHandlerBroadcast[i].name === pushName && listHandlerBroadcast[i].key === key) {
                listHandlerBroadcast.splice(i, 1);
                return;
            }
        }
    };

    //------------------------------------------------------------------------------------------------------------------//

    Broadcast.prototype.RegisterUpdateJackpot = function (key, func) {
        let handler = new BroadcastListener(UpdateJackpotKey, key, func);
        listHandlerBroadcast.push(handler);
    };

    Broadcast.prototype.RemoveRegisterUpdateJackpot = function (key) {
        this.RemovePush(UpdateJackpotKey, key);
    };

    Broadcast.prototype.UpdateJackpot = function (data) {
        for (var i = 0; i < listHandlerBroadcast.length; i++) {
            if (listHandlerBroadcast[i].name === UpdateJackpotKey) {
                listHandlerBroadcast[i].func(data);
            }
        }
    };

    //------------------------------------------------------------------------------------------------------------------//

    Broadcast.prototype.RegisterUpdateMoney = function (key, func) {
        var handler = new BroadcastListener(UpdateMoneyKey, key, func);
        listHandlerBroadcast.push(handler);
    };

    Broadcast.prototype.RemoveRegisterUpdateMoney = function (key) {
        this.RemovePush(UpdateMoneyKey, key);
    };

    Broadcast.prototype.UpdateMoney = function () {
        for (var i = 0; i < listHandlerBroadcast.length; i++) {
            if (listHandlerBroadcast[i].name === UpdateMoneyKey) {
                listHandlerBroadcast[i].func();
            }
        }
    };


    //------------------------------------------------------------------------------------------------------------------//

    Broadcast.prototype.RegisterUpdateUserInfo = function (key, func) {
        let handler = new BroadcastListener(UpdateUserInfoKey, key, func);
        listHandlerBroadcast.push(handler);
    };

    Broadcast.prototype.RemoveRegisterUpdateUserInfo = function (key) {
        this.RemovePush(UpdateUserInfoKey, key);
    };

    Broadcast.prototype.UpdateUserInfo = function () {
        for (let i = 0; i < listHandlerBroadcast.length; i++) {
            if (listHandlerBroadcast[i].name === UpdateUserInfoKey) {
                listHandlerBroadcast[i].func();
            }
        }
    };

    //------------------------------------------------------------------------------------------------------------------//

    return {
        getInstance: function () {
            if (instance == null) {
                instance = new Broadcast();
                instance.constructor = null;
            }
            return instance;
        }
    };

})();

let BroadcastInstance = Broadcast.getInstance();
export default  BroadcastInstance;