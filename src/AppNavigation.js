import { createStackNavigator } from 'react-navigation';

import Login from './screens/Login/Login'; 

const App = createStackNavigator({
  Login: {
    screen: Login,
  },
});

export default App;
