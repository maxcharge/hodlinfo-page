import React from 'react';
import './App.css';
import Header from './components/Header'
import DashBoard from './components/DashBoard'
import Body from './components/Body';

function App() {
  return (
    <div className="App">
        <Header/>
        <DashBoard/>
        <Body/>
    </div>
  );
}

export default App;
