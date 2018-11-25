/** @format */
import React from 'react';
import App from './App';

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

const AppContainer = () => {
    return (
        <React.Fragment>
            
                <App />
            
        </React.Fragment>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
