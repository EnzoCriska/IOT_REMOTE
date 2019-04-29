import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Toast } from 'native-base'

import BluetoothSerial from 'react-native-bluetooth-serial'
import { RenderBLEScan } from './render';

export default class BLEScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false
    };
  }

  componentWillMount() {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
      values => {
        console.log(values)
        
        const [isEnabled, devices] = values;
        console.log(devices[0].isConnected())
        this.setState({ isEnabled, devices });
      }
    );

    BluetoothSerial.on("bluetoothEnabled", () => {
      BluetoothSerial.list().then(devices => this.setState({ devices }))
      this.discoverUnpaired()
    }
    );

    BluetoothSerial.on("bluetoothDisabled", () =>
      console.log("Bluetooth disabled")
    );

    BluetoothSerial.on("error", err => {
      console.log("error", err);
    });

    BluetoothSerial.on("connectionLost", () => {
      if (this.state.device) {
        this.connect(this.state.device)
          .then(res => { })
          .catch(err => {
            console.log("error", err);
          });
      }
    });
  }

  componentDidMount = () => {
    // this.enable()
    this.discoverUnpaired()
  };


  toggleBluetooth(value) {
    console.log("toggle..." + value)
    if (value === true) {
      this.enable()
    } else {
      this.disable()
    }
  }

  enable() {
    BluetoothSerial.enable()
      .then((res) => {
        console.log("change on")
        Toast.show({
          text: "BLE on!",
          type: "success"
        })
        this.setState({ isEnabled: true })
      })
      .catch((err) => console.log(err.message))
  }

  disable() {
    BluetoothSerial.disable()
      .then((res) => {
        console.log("change off")
        Toast.show({
          text: "BLE off!",
          type: 'success'
        })
        this.setState({ isEnabled: false })
      })
      .catch((err) => console.log(err.message))
  }

  discoverUnpaired() {
    console.log("discover..." + this.state.discovering)
    if (this.state.discovering) {
      return false
    } else {
      this.setState({ discovering: true })
      BluetoothSerial.discoverUnpairedDevices()
        .then((unpairedDevices) => {
          console.log(unpairedDevices)
          this.setState({ unpairedDevices, discovering: false })
        })
        .catch((err) => console.log(err.message))
    }
  }

  pairDevice(device) {
    BluetoothSerial.pairDevice(device.id)
      .then((paired) => {
        if (paired) {
          console.log(`Device ${device.name} paired successfully`)
          Toast.show({
            text: `Device ${device.name} paired successfully`,
            type: "success"
          })
          const devices = this.state.devices
          devices.push(device)
          this.setState({ devices, unpairedDevices: this.state.unpairedDevices.filter((d) => d.id !== device.id) })
        } else {
          console.log(`Device ${device.name} pairing failed`)
          Toast.show({
            text: `Device ${device.name} pairing failed`,
            type: "danger"
          })
        }
      })
      .catch((err) => console.log(err.message))
  }

  cancelDiscovery() {
    if (this.state.discovering) {
      BluetoothSerial.cancelDiscovery()
        .then(() => {
          this.setState({ discovering: false })
        })
        .catch((err) => console.log(err.message))
    }
  }

  connect(device) {
    this.setState({ connecting: true })
    BluetoothSerial.connect(device.id)
      .then((res) => {
        Toast.show({
          text: `Connected to device ${device.name}`,
          type: "success"
        })
        this.setState({ device, connected: true, connecting: false })
      })
      .catch((err) => console.log(err))
  }

  disconnect() {
    BluetoothSerial.disconnect()
      .then(() => this.setState({ connected: false }))
      .catch((err) => console.log(err.message))
  }

  toggleConnect(value) {
    if (value === true && this.state.device) {
      this.connect(this.state.device)
    } else {
      this.disconnect()
    }
  }

  onGoBack() {
    this.props.navigation.goBack()
  }

  render() {
    const { isEnabled, devices, unpairedDevices, discovering, connected, device, isRefreshing } = this.state
    return (
      <RenderBLEScan
      state = {this.state}
        isRefreshing = {isRefreshing}
        connected={connected}
        device={device}
        isEnabled={isEnabled}
        toggleBluetooth={(value) => this.toggleBluetooth(value)}
        onGoBack={() => this.onGoBack()}
        devices={devices}
        unpairedDevices={unpairedDevices}
        discovering={discovering}
        onPairToDevices={(device) => this.pairDevice(device)}
        onConnectDevice={(device) => this.connect(device)}
        onRefresh = {() => this.discoverUnpaired()}
      />
    );
  }
}
