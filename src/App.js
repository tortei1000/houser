import React from 'react';
import { HashRouter } from 'react-router-dom'

import './App.css';
import routes from "./routes"
import Header from "./components/Header/Header"
import House from "./components/House/House"


function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        {routes}
        <House />
      </div>
    </HashRouter>
  );
}

export default App;
