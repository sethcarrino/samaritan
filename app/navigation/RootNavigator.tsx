import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

// create switch navigation with authentication flow and main app
const switchNavigator = createSwitchNavigator(
  {
    App: AppNavigator
  },
  {
    initialRouteName: 'App'
  }
);

export default createAppContainer(switchNavigator);
