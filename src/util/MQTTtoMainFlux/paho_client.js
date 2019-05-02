import { Client, Message } from 'react-native-paho-mqtt';

//Set up an in-memory alternative to global localStorage
export function Network(thing_id, thing_key, channel_id){

  console.log("Network Init")

  const myStorage = {
    setItem: (key, item) => {
      myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
      delete myStorage[key];
    },
  };
  console.log("Create...")
  // Create a client instance
  // const client = new Client({ uri: `mqtt://35.247.152.248:1883/channels/${channel_id}/messages`, clientId: 'clientId', storage: myStorage });
  const client = new Client({uri: "mqtt://test.mosquitto.org", clientId:"mqttjs01"})

  // connect the client
    client.connect(
    //   {
    //   userName: thing_id,
    //   password: thing_key
    // }
    )
    .then(() => {
      // Once a connection has been made, make a subscription and send a message.
      console.log('onConnect');
      return client.subscribe('World');
    })
    .then(() => {
      const message = new Message('Hello');
      message.destinationName = 'World';
      client.send(message);
    })
    .catch((responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.log('onConnectionLost:' + responseObject.errorMessage);
      }
    })
  ;

    // set event handlers
    client.on('connectionLost', (responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.log(responseObject.errorMessage);
      }
    });
    client.on('messageReceived', (message) => {
      console.log(message.payloadString);
    });
    

}