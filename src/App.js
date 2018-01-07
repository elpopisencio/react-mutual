import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Buscar from './components/buscar/Buscar';
import Barra from './components/Barra';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Barra />
        <br />
        <Buscar />
      </div>
    );
  }
}

export default App;
