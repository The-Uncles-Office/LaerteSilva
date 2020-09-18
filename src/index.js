import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './pages/app/App';
import Contact from './pages/contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Contact></Contact>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
