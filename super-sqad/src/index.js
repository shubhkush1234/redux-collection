import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { addCharacterById } from './actions';

let store = createStore(rootReducer);

console.log("store.getState() ", store.getState());

store.subscribe(() => console.log("store", store.getState()));

// store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

