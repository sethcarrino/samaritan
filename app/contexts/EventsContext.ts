import React from 'react';

const EventsContext = React.createContext([]);

export const EventsProvider = EventsContext.Provider;
export const EventsConsumer = EventsContext.Consumer;
export default EventsContext;
