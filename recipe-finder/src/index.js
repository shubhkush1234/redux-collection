import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer  from './reducers/index';
// import FavoriteRecipeList from './components/FavoriteRecipeList';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(

  <Provider store={store}><App /></Provider>, document.getElementById('root'));
