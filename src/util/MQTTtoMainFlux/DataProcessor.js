function Listener(key, name, funcSuccess, funcError) {
    this.key = key;
    this.name = name;
    this.funcSuccess = funcSuccess;
    this.funcError = funcError;
}

let DataProcessor = (function () {

    let instance;
    let listPushHandler = [];
    let listResponseHandler = [];

    function DataProcessor() {
    }

    DataProcessor.prototype.AddPushHandler = function (key, code, type, funcSuccess, funcError) {
        let name = code + type;
        let handler = new Listener(key, name, funcSuccess, funcError);
        listPushHandler.push(handler);
    };

    DataProcessor.prototype.RemovePushHandler = function (key) {
        for (let i = 0; i < listPushHandler.length; i++) {
            if (listPushHandler[i].key === key) {
                listPushHandler.splice(i, 1);
                return;
            }
        }
        console.log(listPushHandler)
    };

    DataProcessor.prototype.GetPushHandler = function (name) {
        let handlers = [];
        for (let i = 0; i < listPushHandler.length; i++) {
            if (listPushHandler[i].name === name) {
                handlers.push(listPushHandler[i]);
            }
        }
        return handlers;
    };

    DataProcessor.prototype.AddResponseHandler = function (senderId, funcSuccess, funcError) {
        console.log("ADD...: " + senderId)
        let handler = new Listener('', senderId, funcSuccess, funcError);
        listResponseHandler.push(handler);
    };

    DataProcessor.prototype.RemoveResponseHandler = function (senderId) {
        for (var i = 0; i < listResponseHandler.length; i++) {
            if (listResponseHandler[i].name === senderId) {
                listResponseHandler.splice(i, 1);
                return;
            }
        }
    };

    DataProcessor.prototype.GetResponseHandler = function (senderId) {
        for (let i = 0; i < listResponseHandler.length; i++) {
            if (listResponseHandler[i].name === senderId) {
                return listResponseHandler[i];
            }
        }
        return null;
    };

    DataProcessor.prototype.Destroy = function () {
        if (listPushHandler.length > 0)
            listPushHandler.slice(0, listPushHandler.length);
        if (listResponseHandler.length > 0)
            listResponseHandler.slice(0, listResponseHandler.length);
    };

    DataProcessor.prototype.ProcessIncomeData = function (data) {
        // if (data.code !== 'pip') console.log(data)
        if (data.code !== 'pip') console.log("messsage: " + JSON.stringify(data));
        if (data.sender_id !== 0) {
            console.log('Response ' + data.code + data.type + ":" + data.content);
            let packet = JSON.parse(data.content);
            let handler = this.GetResponseHandler(data.sender_id);
            // if (data.code+data.type === 'cha2') 
            if (handler != null) {
                if (packet.status) {
                    if (handler.funcSuccess != null) handler.funcSuccess(JSON.parse(packet.data));
                } else if (handler.funcError != null) handler.funcError(packet.error);
            }
            this.RemoveResponseHandler(data.sender_id);
        } else {
            if (data.code === 'pip') {


            } else {
                
                console.log('Get Push ' + data.code + data.type + " : " + data.content);
            }

            let packet = JSON.parse(data.content);
            let code = data.code.substring(0, 3);
            let handlers = this.GetPushHandler(code + data.type);

            if (code === 'crt') {
                console.log("handlers : " + JSON.stringify(handlers));
            }

            if (handlers != null && handlers.length > 0) {
                if (packet.status) {
                    handlers.forEach(handler => {
                        if (handler.funcSuccess != null) handler.funcSuccess(JSON.parse(packet.data));
                    });
                } else {
                    handlers.forEach(handler => {
                        if (handler.funcError != null) handler.funcError(packet.error);
                    });
                }
            }

        }

    };

    return {
        getInstance: function () {
            if (instance == null) {
                instance = new DataProcessor();
                instance.constructor = null;
            }
            return instance;
        }
    };

})();

let DataProcessorInstance = DataProcessor.getInstance();
export default DataProcessorInstance;