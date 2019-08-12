import React from 'react';
import { Provider } from 'react-redux';
import  { Switch } from 'react-router-dom';
import './App.scss';
import Routes from './routes';
import storeConfig from './redux/storeConfig'

const App = () => {
  return (
    <Provider store={storeConfig}>
      <Switch>
        <Routes />
      </Switch>
    </Provider>
  );
};

export default App;