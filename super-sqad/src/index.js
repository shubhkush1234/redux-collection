import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addCharacterById } from './actions';
// import {ADD_CHARACTER} from './actions';

const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2)); 
// store.dispatch({
//   type: ADD_CHARACTER,
//   id: 2
// }); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
