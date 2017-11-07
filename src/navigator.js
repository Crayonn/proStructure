import { StackNavigator } from 'react-navigation';

import Login from './modules/login/view/';

const AppNavigator = StackNavigator({
  Login: { screen: Login },

});

export default AppNavigator;