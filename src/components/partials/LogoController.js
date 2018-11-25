import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    View, 
    StyleSheet, 
    Image
} from 'react-native';

import { getStyleFromProps } from '../../service';

class LogoController extends Component {
    render() {
        const style = [
            styles.logoContainer,
            getStyleFromProps(['marginTop'], this.props)
        ];
        return <View style={style}>
            <Image source={require('../../images/logo.png')} style={styles.image} resizeMode="cover" />
        </View>
    }
}

LogoController.propTypes = {
    marginTop: PropTypes.number
}

const styles = StyleSheet.create({
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 23
    },
    image: {
        width: 164.98,
        height: 148.23
    }
});

export default LogoController