import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import store from './store'
import {BrowserRouter} from  'react-router-dom'
import { Provider } from 'react-redux'
import App from "./components/App/App";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
