import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import { Bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import store from './src/stor';

export default function App() {
  const [isRedy, setIsRedy] = useState(false);
  if (!isRedy) {
    return (
      <AppLoading
        startAsync={Bootstrap}
        onFinish={() => setIsRedy(true)}
        onError={err => console.log('app load errpr: ', err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
