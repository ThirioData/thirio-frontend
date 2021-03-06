import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Custom imports
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
registerServiceWorker();
