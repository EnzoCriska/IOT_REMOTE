import React, { Component } from 'react';
import { BackHandler, Animated } from 'react-native';
import { RenderHome } from './render';
import { getStatusWeather, getDevicesApi } from '../../network/API';
import { requesLocationPermission } from '../../util/function_util/checkPermission';
import { connect } from 'react-redux'
import { getDevices, createChanel, getChanelAction } from './action';
import { Toast } from 'native-base';
import { height } from '../../util/value_containt/constaint';

class Home extends Component {
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

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  _spring() {
    Toast.show({
      text:"Nhấn back lần nữa để thoát",
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


  handleBackButton = () => {
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
  };

  async componentDidMount() {
    this.props.navigation.addListener('willBlur', 
    payload => {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    })

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

  };

  getDevice() {
    const { token, user_name } = this.props.data
    this.props.getDevices(this, token)
    this.props.getChannel(user_name, token)
  }


  render() {
    const { country, forecast } = this.state
    const { rooms } = this.props.devices
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
    getChannel: (username, token) => {
      dispatch(getChanelAction(username, token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
