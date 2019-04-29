import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderHome } from './render';
import { getStatusWeather, getDevicesApi } from '../../network/API';
import { requesLocationPermission } from '../../util/function_util/checkPermission';
import { connect } from 'react-redux'
import { getDevices } from './action';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {
        city:'',
        country:''
      },
      forecast: {
        main: '',
        description: '',
        temp: '',
        icon: ''
      },
      rooms:[]
    };

  }

  async componentDidMount(){
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
              country:res.sys.country,
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

  getDevice(){
    const {token} = this.props.data
    this.props.getDevices(token)
  }


  render() {
    const { country, forecast } = this.state
    const {rooms} = this.props.devices
    return (
      <RenderHome
      navigation = {this.props.navigation}
        country={country}
        forecast={forecast}
        rooms = {rooms}
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
    getDevices: (token) => {
      dispatch(getDevices(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
