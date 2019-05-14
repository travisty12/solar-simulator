import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component />
      </HashRouter>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
