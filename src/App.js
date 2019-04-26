import React from 'react';

import './App.css';
import Dashboard from "./components/Dashboard/Dashboard"
import Header from "./components/Header/Header"
import House  from "./components/House/House"
import Wizard from "./components/Wizard/Wizard"

function App() {
  return (
    <div>
      <Dashboard />
      <Wizard />
      <House />
      <Header />
    </div>
  );
}

export default App;
