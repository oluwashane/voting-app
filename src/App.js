import React from 'react';
import './App.css';
import Main from './components/MainComponent'
import Result from './components/ResultComponent'

function App({store}) {
  return (
    <div>
      <Main store={store}/>
      <Result store={store}/>
    </div>
  );
}

export default App;
