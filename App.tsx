import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import AppNavigator from './src/navigation';
import store from './src/store';

let persistor = persistStore(store);

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
