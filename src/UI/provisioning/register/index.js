import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderRegister } from './render';
import LoadingComp from '../../../component/LoadingComp';
import { registerApi } from '../../../network/API';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "tiendung.thai.8@gmail.com",
            password: "123",
            repassword: "123",
            isloading: false
        };
    }

    onChangeEmail(text) {
        this.setState({ email: text })
    }

    onChangePass(text) {
        this.setState({ password: text })
    }

    onChangeRePass(text){
        this.setState({repassword: text})
    }

    onRegister (){
        registerApi(this.state.email, this.state.password)
    }




    render() {
        const { email, password, isloading, repassword} = this.state
        if(isloading) return <LoadingComp/>
        return (
            <RenderRegister
                email={email}
                password={password}
                repassword = {repassword}
                onChangeEmail={(text) => this.onChangeEmail(text)}
                onChangePass={(text) => this.onChangePass(text)}
                onChangeRePass ={(text) => this.onChangeRePass(text)}

                onRegister={() => this.onRegister()}
            />
        );
    }
}
