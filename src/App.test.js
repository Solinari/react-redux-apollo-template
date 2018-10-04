import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store/store';
import App from './App';


it('renders with store provider without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
