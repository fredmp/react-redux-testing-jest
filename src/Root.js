/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

export default ({ children, storeInitialState = {} }) => (
  <Provider store={createStore(reducers, storeInitialState, applyMiddleware(reduxPromise))}>
    {children}
  </Provider>
);
