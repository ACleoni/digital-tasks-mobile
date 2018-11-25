import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ImageBackground,
    Dimensions,
    ToucableOpacity,
    StyleSheet,
} from 'react-native';

const UtilService = require('../../service/');

const { getStyleFromProps, getPlatformValue} = UtilService;

const window = Dimensions.get('window');

class UIController extends Component {
    _renderChildren() {
        let childrenArray = [];
        if (this.props.iconLeft) {
            childrenArray.push(
                <ToucableOpacity key="icon_left" onPress={this.props.onPressIcon} styles={{height: 35}}>
                    <Icon color="#fff" size={25} name={this.props.iconLeft} styles={styles.icon} />
                </ToucableOpacity>
            );
        }
        childrenArray.push(this.props.children);
        return childrenArray
    }

    _renderImageBackground() {
        const style = [
            styles.containerImage,
            getStyleFromProps(['paddingTop'], this.props)
        ];
        return <ImageBackground source={require('../../images/dt-login-bg.jpg')} style={style}>
            {this._renderChildren()}
        </ImageBackground>
    }
2
    _renderViewBackground() {
        const style = [
            styles.containerView,
            getStyleFromProps(['paddingTop'], this.props)
        ]
        return <View style={style}>
            {this.renderChildren()}
        </View>
    }

    render() {
        if (this.props.transparent) return this._renderViewBackground();
        else return this._renderImageBackground();
        
    };
};

UIController.propTypes = {
    iconLeft: PropTypes.string,
    onPressIcon: PropTypes.func,
    paddingTop: PropTypes.number
}

const styles = StyleSheet.create({
    containerImage: {
        width: window.width,
        height: window.height,
        resizeMode: getPlatformValue('ios', 'contain', 'contain'),
        paddingTop: getPlatformValue('android', 5, 22)
    },
    containerView: {
        flex: 1,
        paddingTop: getPlatformValue('android', 5, 22)
    },
    icon: {
        marginLeft: 10,
        position: 'relative',
        top: 6,
        opacity: 0.8,
        backgroundColor: 'transparent'
    }
});

export default UIController