import React from 'react';
import { Provider } from 'react-redux';

// STORE
import { store } from '@redux/store';

// COMPONENTS
import { DemoList } from '@react-app/components';
//..

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <DemoList />
      </div>
    </Provider>
  );
};

export default App;
