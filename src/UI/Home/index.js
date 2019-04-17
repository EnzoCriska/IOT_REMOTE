import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderHome } from './render';
import { getStatusWeather } from '../../network/API';
import { requesLocationPermission } from '../../util/function_util/checkPermission';

export default class Home extends Component {
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
      rooms:[
        {
          name: "Phòng khách",
          id: 1
        },
        {
          name: "Phòng ngủ 1",
          id: 2
        },
        {
          name: "Phòng ngủ 2",
          id: 3
        },
        {
          name: "Phòng Bếp",
          id: 4
        },
        {
          name: "Phòng Đọc sách",
          id: 5
        },
        {
          name: "Phòng Tắm",
          id: 6
        },
        {
          name: "Phòng Thờ",
          id: 7
        }
      ]
    };

  }

  async componentDidMount(){
    await requesLocationPermission()
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


  render() {
    const { country, forecast, rooms } = this.state
    return (
      <RenderHome
        country={country}
        forecast={forecast}
        rooms = {rooms}
      />
    );
  }
}
