/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default ({ children, storeInitialState = {} }) => (
  <Provider store={createStore(reducers, storeInitialState)}>{children}</Provider>
);
