import React, { useState, useEffect } from 'react';
import moment from 'moment';
import events from './app/data/events';

// Root Navigator import for determining app view stack
import RootNavigator from './app/navigation/RootNavigator';

// App Provide from the Context API
import { AppProvider } from './app/contexts/AppContext';

const dynamicDatedEvents = [];
events.forEach((event: any, index: number) => {
  // This for each makes sure the application always has future events
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
  const [events] = useState(dynamicDatedEvents);
  const [event, setEvent] = useState({});
  const [selectedEvents] = useState([]);

  return (
    <AppProvider
      value={{
        events,
        event,
        selectedEvents,
        getEvent: eventId => {
          let filteredEvent = events.filter(e => e.id == eventId);
          setEvent(filteredEvent[0]);
        }
      }}
    >
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
