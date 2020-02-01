import { createStackNavigator } from 'react-navigation-stack';
import Events from '../views/Events';
import EventDetail from '../views/EventDetail';

const AppNavigator = createStackNavigator(
  {
    Events: { screen: Events },
    EventDetail: { screen: EventDetail }
  },
  {
    headerMode: 'none'
  }
);

export default AppNavigator;
