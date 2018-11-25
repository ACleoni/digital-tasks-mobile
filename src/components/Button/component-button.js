import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
const UtilService = require('../../service/');

const { getStyleFromProps } = UtilService;

export const Button = ({ onPress, onBlur }) => {
    const ButtonStyle = {
        ...getStyleFromProps(['margin', 'width', 'flex','backgroundColor','padding',], this.props)
    };

    const ButtonTextStyle = {
        ...getStyleFromProps(['fontSize', 'color', ], this.props)
    };

    return ( 
        <TouchableOpacity style={ButtonStyle} onPress={onPress} onBlur={onBlur}>
            <Text style={ButtonTextStyle}>{this.props.children}</Text>
        </TouchableOpacity>
    )
}