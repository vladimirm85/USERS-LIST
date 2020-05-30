import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducer';
import { middleware, sagaMiddleware } from './middleware';
import { watchFetchUsers } from './saga';
import { App } from './components/App';

const store = createStore(reducers, middleware);
sagaMiddleware.run(watchFetchUsers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
