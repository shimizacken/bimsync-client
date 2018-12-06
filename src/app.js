import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores';
import MainWrapper from './components/mainWrapper';

ReactDOM.render(
  <Provider {...stores}>
    <MainWrapper />
  </Provider>,
  document.getElementById('root')
);