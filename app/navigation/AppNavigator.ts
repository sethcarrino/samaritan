import { createStackNavigator } from 'react-navigation-stack';
import Events from '../views/Events';
import EventDetail from '../views/EventDetail';
import SelectedEvents from '../views/SelectedEvents';
import Search from '../views/Search';

const AppNavigator = createStackNavigator(
  {
    Events: { screen: Events },
    EventDetail: { screen: EventDetail },
    SelectedEvents: { screen: SelectedEvents },
    Search: { screen: Search }
  },
  {
    initialRouteName: 'Events',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowColor: 'transparent'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: '600'
      }
    }
  }
);

export default AppNavigator;
