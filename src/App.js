import React, { Component } from 'react'; 
import Routes from './routes'

import './styles.css';

/* Importando componentes criados */
import Header from './components/Header';
import Main from './pages/main'; 

const App = () => (
  <div className="App">
     <Header />
     <Routes />
    </div>
); 

export default App;

