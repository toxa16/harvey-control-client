import React from 'react';

import './App.css';
import Navbar from './Navbar/Navbar';
import ConnectedControlPanel from './control-panel/ui/ConnectedControlPanel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ConnectedControlPanel />
    </div>
  );
}

export default App;
