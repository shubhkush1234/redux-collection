import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// import FavoriteRecipeList from './components/FavoriteRecipeList';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);
// store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </BrowserRouter>  
  , document.getElementById('root'));
  