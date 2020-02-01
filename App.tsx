import React from 'react';

// Root Navigator import for determining app view stack
import RootNavigator from './app/navigation/RootNavigator';

const App: React.FC = () => {
  return (
    <>
      <RootNavigator />
    </>
  );
};

export default App;
