import React from 'react';
import moment from 'moment';
import events from './app/data/events';

// Root Navigator import for determining app view stack
import RootNavigator from './app/navigation/RootNavigator';

// App Provide from the Context API
import { EventsProvider } from './app/contexts/EventsContext';

const dynamicDatedEvents = [];
events.forEach((event: any, index: number) => {
  let currentDate = moment();
  let futureMonth = moment(currentDate).add(index <= 3 ? 1 : index + 1, 'M');
  let futureMonthEnd = moment(futureMonth).endOf('month');

  if (
    currentDate.date() != futureMonth.date() &&
    futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))
  ) {
    futureMonth = futureMonth.add(1, 'd');
  }
  event.date = futureMonth;

  dynamicDatedEvents.push(event);
});

const App: React.FC = () => {
  return (
    <EventsProvider value={dynamicDatedEvents}>
      <RootNavigator />
    </EventsProvider>
  );
};

export default App;
