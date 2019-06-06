import React from 'react';
import './App.css';
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
      </header>
    </div>
  );
}

function getCurrentTime() {
  const currentdate = new Date();
  return "" + currentdate.getDay() + "/"+currentdate.getMonth()
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

}

export default App;
