import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
//import { Router, Route, IndexRoute, hashHistory } from "react-router";
import {BrowserRouter as Router, Route, IndexRoute, hashHistory } from 'react-router-dom';

import HomeApp from './Home/containers/HomeApp';
import reducers from './Home/reducers';


let store = createStore(
      reducers,
      compose(
        applyMiddleware(
          thunkMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={HomeApp}>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.homeApp'));
