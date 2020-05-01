import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './screens/main';
import './index.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;