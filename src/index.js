//core
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//store
import store from './store/index';
//components
import App from './components/App';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'))