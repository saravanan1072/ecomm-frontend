
import React from 'react';
import Routers from './routers/Routers';
import { Provider } from 'react-redux';
import Store from './utilities/Store';
import './App.css';

function App() {

  return (
    <div className="App">
      <Provider store={Store}>
      <Routers/>
      </Provider>

    </div>
  );
}

export default App;
