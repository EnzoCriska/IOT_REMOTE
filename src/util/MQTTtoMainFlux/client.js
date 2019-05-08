
import DataProcessor from './DataProcessor';

const uuidv1 = require('uuid/v1');

import { AsyncStorage } from 'react-native';

import init from 'react_native_mqtt';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

let Network = (function () {

  let instance;

  function Network() {

  }

  Network.prototype.Init = function () {
      
      this.client = new Paho.MQTT.Client('35.247.152.248', 1883, '/channels/023e85fd-eb09-417f-af73-1985e281c295/messages', "uname");;
      console.log(this.client)

      console.log('Network init: ' + this.client.host);
  };

    

  Network.prototype.Connect = function () {

      let _this = this;
      
      console.log("Start connect to : ");
      this.client.connect(
        {
          hosts: ['wss://35.247.152.248:1883/mqtt'],
          timeout: 30000,
          userName: '65fa319c-c27f-4bc9-83bf-5b4e1f81ba4b',
          password: 'bf054c59-f401-4f84-b7fa-e148f50181f7',
          onSuccess: this.onConnect.bind(this), 
          useSSL: true, 
          onFailure: this.onFailure.bind(this) })
      
      this.client.onConnectionLost = this.onConnectionLost;
      this.client.onMessageArrived = this.onMessageArrived.bind(this);

  };

  Network.prototype.onConnect = function(){
    console.log("NETWORK CONNECTED")
  }

  Network.prototype.onFailure = function(err){
    console.log(["NEWORK CONNECT FAIL: ", err])
  }

  Network.prototype.onMessageArrived = function (packet) {
    console.log(packet)
      DataProcessor.ProcessIncomeData(packet);
  };

  Network.prototype.onConnectionLost = function () {
      // if (this._socket !== null && this._socket !== undefined) {
      //     try {
      //         this._socket.close(ws.LOGOUT_REASON);
      //     } catch (e) {
      //         console.log("e", e);
      //     }
      // }
      // DataProcessor.Destroy();
  };

  Network.prototype.Send = function (data) {
      this._socket.send(data);
  };

  return {
      getInstance: function () {
          if (instance == null) {
              instance = new Network();
              instance.constructor = null;
          }
          return instance;
      }
  };

})();

let NetworkInstance = Network.getInstance();
export default NetworkInstance;