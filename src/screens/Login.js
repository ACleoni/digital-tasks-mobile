import React,{ Component } from 'react';

import { 
        UIController, 
        LogoController, 
        InputController,
        ButtonController
    } from '../components/partials'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    };

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <UIController>
                <LogoController />
                <InputController
                    autoCapitalize={'none'} 
                    keyboardType={'email-address'}
                    placeholder={'Enter your email'} 
                />
                <ButtonController marginTop={66} >
                    Get Started
                </ButtonController>
            </UIController>
        )
    };
};

export default Login