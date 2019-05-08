import React, { Component } from 'react';
import { BackHandler, Animated, AsyncStorage } from 'react-native';
import { RenderHome } from './render';
import { getStatusWeather, getDevicesApi } from '../../network/API';
import { requesLocationPermission } from '../../util/function_util/checkPermission';
import { connect } from 'react-redux'
import { getDevices, createChanel, getChanelAction } from './action';
import { Toast } from 'native-base';
import { height, ws } from '../../util/value_containt/constaint';

// import Network from '../../util/MQTTtoMainFlux/client';
import Cloud from '../../util/MQTTtoMainFlux/cloud'
// import Network from '../../util/websocket/Network'

class Home extends Component {
  client;
  constructor(props) {
    super(props);

    this.springValue = new Animated.Value(100);
    this.state = {
      country: {
        city: '',
        country: ''
      },
      forecast: {
        main: '',
        description: '',
        temp: '',
        icon: ''
      },
      rooms: [],
      backClickCount: 0
    };

  }

  componentDidMount() {

    this.props.navigation.addListener('willBlur',
      payload => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      })

    this.initMQTT()
    
    
  }

  async initData(){
    await requesLocationPermission()
    this.getDevice()
    await navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        const location = position.coords
        getStatusWeather(location.latitude, location.longitude).then(res => {
          console.log(res);
          this.setState({
            country: {
              country: res.sys.country,
              city: res.name
            },
            forecast: {
              main: res.weather[0].main,
              description: res.weather[0].description,
              temp: res.main.temp,
              icon: res.weather[0].icon
            }
          })

          console.log(this.state.forecast)

        }).catch(err => {
          console.log("ERROR " + err.toString())
        })
      }
    ).catch(error => console.log(error))



  }

  initMQTT() {
    console.log("Init MQTT Client")
    // Network.Init()
    // Network.Connect()
    Cloud.Init()
    Cloud.Connect()
    // Network.Init()
    // Network.Connect()
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.initData()
  }

  _spring() {
    Toast.show({
      text: "Nhấn back lần nữa để thoát",
      type: "warning"
    })
    this.setState({ backClickCount: 1 }, () => {
      Animated.sequence([
        Animated.spring(
          this.springValue,
          {
            toValue: -.15 * height,
            friction: 5,
            duration: 300,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          this.springValue,
          {
            toValue: 100,
            duration: 300,
            useNativeDriver: true,
          }
        ),

      ]).start(() => {
        this.setState({ backClickCount: 0 });
      });
    });

  }

  getDevice() {
    const { token, user_name } = this.props.data
    this.props.getDevices(this, token)
  }



  handleBackButton = () => {
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
  };


  render() {
    const { country, forecast } = this.state
    const { rooms } = this.props.devices
    console.log(["HOME STATE", this.props.data])
    return (
      <RenderHome
        navigation={this.props.navigation}
        country={country}
        forecast={forecast}
        rooms={rooms}
        onReloadDevices={() => this.getDevice()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.login_reducer,
    devices: state.devices_reducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDevices: (context, token) => {
      dispatch(getDevices(context, token))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)