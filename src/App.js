import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Buscar from './components/buscar/Buscar';
import Barra from './components/Barra';
import Ingresar from './components/ingreso/Ingresar';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ingresar: '', 
      buscar: '',
      actual: ''
    }
  }

  componentWillMount = () => {
    this.setState({
      actual: <Ingresar handleLogin={this.handleLogin}/>,
      buscar: <div className="container">
                <Barra />
                <br />
                <Buscar />
              </div>
    });
  }

  handleLogin = (usuario, contra) =>{
    if(usuario === 'admin' && contra === 'admin'){
      this.setState({
        actual: <div className="container">
                <Barra />
                <br />
                <Buscar />
              </div>
      
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.actual}
      </div>
    );
  }
}

export default App;
