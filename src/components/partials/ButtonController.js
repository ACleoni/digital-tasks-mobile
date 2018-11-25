import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet
} from 'react-native';

const UtilService = require('../../service/');

const { getStyleFromProps } = UtilService;

class ButtonController extends Component {
    render() {
        const style = {
            ...styles.container,
            ...getStyleFromProps([
                'marginTop', 
                'width', 
                'flex',
                'backgroundColor',
                'paddingLeft',
                'paddingRight'
                ], this.props)
        };

        return ( 
            <View style={styles.wrapper}>
                <TouchableOpacity style={style} 
                                    onPress={this.props.onPress}>
                    <Text style={styles.text}>
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    },
    container: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 47,
        paddingRight: 47,
        backgroundColor: '#00a2ff',
        borderRadius: 5,
        alignItems: 'stretch',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 1
        }
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 3
    }
});

export default ButtonController;

