import React from 'react';
import { HashRouter } from 'react-router-dom'

import './App.css';
import routes from "./routes"
import Header from "./components/Header/Header"



function App() {
  return (
    
    <HashRouter>
      <div>
        <Header />
        {routes}
        
      </div>
    </HashRouter>
  );
}

export default App;
