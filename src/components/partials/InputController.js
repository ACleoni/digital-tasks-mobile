import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    TextInput, 
    StyleSheet
} from 'react-native';

import { getStyleFromProps } from '../../service';

class InputController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    _renderInputText() {
        const style = [
            styles.input
        ]
        return <TextInput
                    value={this.props.value}
                    autoCapitalize={this.props.autoCapitalize}
                    keyboardType={this.props.keyboardType}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    style={style}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                    onChangeText={this.props.onChange}
                    secureTextEntry={this.props.secureTextEntry}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                />
    }

    _renderInputContainer() {
        const style = [
            styles.inputContainer,
            getStyleFromProps(['marginTop'], this.props)
        ];
        return <View style={style}>
                    {this._renderInputText()}
                </View>
    }

    render() {
        return this._renderInputContainer();
    }
}

InputController.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    marginTop: PropTypes.number
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 23
    },
    input: {
        height: 45.76,
        width: 297.74,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: 1,
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15
    }
})

export default InputController;