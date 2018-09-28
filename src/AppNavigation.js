import { createStackNavigator } from 'react-navigation';

import LoginContainer from './containers/LoginContainer/LoginContainer';

const App = createStackNavigator({
  Login: {
    screen: LoginContainer,
  },
});

export default App;
