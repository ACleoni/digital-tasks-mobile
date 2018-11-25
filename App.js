import {
  createStackNavigator
} from 'react-navigation';

import {
  Login
} from './src/screens';




const App = createStackNavigator({
    Login: { screen: Login }
});

export default App