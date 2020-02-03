import React, { useState } from 'react';

const EventsContext = React.createContext({});

// export const EventsProvider = EventsContext.Provider;

export interface AppContextInterface {
  events?: ObjectArray;
  event?: any;
  selectedEvents?: ObjectArray;
  getEvent?: (number) => void;
  addEvent?: (number) => void;
  removeEvent?: (number) => void;
}

const ctxt = React.createContext<AppContextInterface | null>({
  events: [],
  event: {},
  selectedEvents: []
});

export const AppProvider = ctxt.Provider;

export const AppConsumer = ctxt.Consumer;
export default ctxt;
