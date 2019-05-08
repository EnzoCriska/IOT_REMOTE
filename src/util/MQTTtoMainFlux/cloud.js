
import DataProcessor from './DataProcessor';
import { Client, Message } from 'react-native-paho-mqtt';

const myStorage = {
    setItem: (key, item) => {
        myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
        delete myStorage[key];
    },
}


let Cloud = (function () {

    let instance;

    function Cloud() {

    }

    Cloud.prototype.Init = function () {

        this.client = new Client({ uri: 'wss://m12.cloudmqtt.com:34132/mqtt', clientId: 'web_83434287hshd6e2', storage: myStorage });
        // this.mainflux = new Client({ uri})
        console.log(this.client)

        console.log('Network init: ' + this.client.host);

    };



    Cloud.prototype.Connect = function () {

        var options = {
            userName: "xwpjieqq",
            password:"gWCXJRIl0yDC",
            timeout :30000,
            cleanSession : true,
            mqttVersion : 3.1,
          }
          this.client.connect(options) 
            .then(() => {   
              console.log('onConnect');
              
              this.client.send("ZZZ", "Hello", 0 )
              this.onConnect()
              return this.client.subscribe('dungtt'); 
            })
            .catch((responseObject) => { 
              if (responseObject.errorCode !== 0) {
                console.log(['onConnectionLost:', responseObject]);
              }
            });

        // this.client.onConnectionLost = this.onConnectionLost;
        // this.client.onMessageArrived = this.onMessageArrived.bind(this);

        this.client.on('connectionLost', (responseObject) => {
            if (responseObject.errorCode !== 0) {
                console.log(responseObject.errorMessage);
            }
        });
        this.client.on('messageReceived', (message) => {
            // const data = message.payloadString;
            // console.log(message)
            // console.log(data);
            DataProcessor.ProcessIncomeData(message)
        });



    };

    Cloud.prototype.onConnect = function () {
        console.log("NETWORK CONNECTED")
    }

    Cloud.prototype.onFailure = function (err) {
        console.log(["NEWORK CONNECT FAIL: ", err])
    }

    Cloud.prototype.onMessageArrived = function (packet) {
        console.log(packet)
        DataProcessor.ProcessIncomeData(packet);
    };

    Cloud.prototype.onConnectionLost = function () {

    };

    Cloud.prototype.Send = function (topic, payload) {
        console.log("Send " + topic + " " + payload)
        // this.client.send("ZZZ", "Hiiiii", 0 )
        this.client.send(topic, payload, 0);
    };

    Cloud.prototype.Subscribe = function (topic){
        console.log("Cloud subscribe " + topic)
        this.client.subscribe(topic)
    }

    return {
        getInstance: function () {
            if (instance == null) {
                instance = new Cloud();
                instance.constructor = null;
            }
            return instance;
        }
    };

})();

let CloudInstance = Cloud.getInstance();
export default CloudInstance;