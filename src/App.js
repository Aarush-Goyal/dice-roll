import React from 'react';
import './App.css';
import Number from "./components/Number"
function App() {

  const theNumBer = Math.floor(Math.random() * (7 - 1) ) + 1
  return (
    <div className="App">
      
      <Number numBer= {theNumBer} />
      
    </div>
  );
}

export default App;
