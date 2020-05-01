import React from 'react';
import { Router } from 'react-router-dom';
import Main from './screens/main';
import history from '../helpers/history';
import './index.scss';

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Main/>
      </Router>
    </div>
  );
}

export default App;