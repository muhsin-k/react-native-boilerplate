import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './screens/Login/Login';

const App = createStackNavigator({
  Login: {
    screen: Login,
  },
});

export default App;
