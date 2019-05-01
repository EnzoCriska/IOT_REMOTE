import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { RenderLogin } from './render';
import LoadingComp from '../../../component/LoadingComp';
import { login_actions } from './actions';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "tieugiacat97@gmail.com",
            password: "123",
        };
    }

    onChangeEmail(text) {
        this.setState({ email: text })
    }

    onChangePass(text) {
        this.setState({ password: text })
    }

    onRegister() {
        this.props.navigation.navigate("register")
    }

    onLogin() {
        this.props.action_login(this, this.state.email, this.state.password)

    }



    render() {
        const { email, password } = this.state
        const { isLoading } = this.props.data
        if (isLoading) return <LoadingComp />
        return (
                <RenderLogin
                    email={email}
                    password={password}
                    onChangeEmail={(text) => this.onChangeEmail(text)}
                    onChangePass={(text) => this.onChangePass(text)}

                    onRegister={() => this.onRegister()}
                    onLogin={() => this.onLogin()}
                />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.login_reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action_login: (context, username, password) => {
            dispatch(login_actions(context, username, password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
