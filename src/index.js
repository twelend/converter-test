import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  eur: '',
  usd: ''
}

const reduser = (state=defaultState, action) => {
  switch (action.type) {
    case 'EUR':
      return { ...state, eur: action.payload}

    case 'USD':
      return { ...state, usd: action.payload}
    
    default:
      return state
  }
}
const store = createStore(reduser)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);