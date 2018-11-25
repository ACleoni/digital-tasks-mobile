import {
  createStackNavigator
} from 'react-navigation';

import Login from './src/components/Login/component-login';

const App = createStackNavigator({
    Login: { screen: Login }
});

export default App