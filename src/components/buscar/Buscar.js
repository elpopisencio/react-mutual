import React, { Component } from 'react';
import Formulario from './Formulario';
import './Buscar.css';

class Buscar extends Component {
  constructor(props){
    super(props);
    this.state= {
    formulario: <Formulario />,
    resultado: ''
    }
  }

  render() {
    return (
      <div >
        {this.state.formulario}
      </div>
    );
  }
}

export default Buscar;
