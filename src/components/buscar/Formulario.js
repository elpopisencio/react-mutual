import React, { Component } from 'react';
import Campo from './Campo';

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      documento: '',
      legajo: '',
      apellido: '',
      nombre: '',
      disabledDocumento: false,
      disabledLegajo: false,
      disabledApellido: false,
      disabledNombre: false,
      valor: ['', '']
    }
  }
  
  limpiarBusqueda() {
    this.setState({
      documento: '',
      legajo: '',
      apellido: '',
      nombre: '',
      disabledDocumento: false,
      disabledLegajo: false,
      disabledApellido: false,
      disabledNombre: false,
      valor: ['', '']
    })
  }

  handleChange(event) {
    console.log(event.target.id);
    switch (event.target.id) {
      case "DocumentoBuscar":
        this.setState({documento: event.target.value})
        if (event.target.value !== '') {
          this.setState({
            disabledLegajo: true,
            disabledApellido: true,
            disabledNombre: true,
          });
        } else {
          this.setState({
            disabledLegajo: false,
            disabledApellido: false,
            disabledNombre: false,
          });
        }
        break;
      case "LegajoBuscar":
        this.setState({legajo: event.target.value})
        if (event.target.value !== '') {
          this.setState({
            disabledDocumento: true,
            disabledApellido: true,
            disabledNombre: true,
          });
        } else {
          this.setState({
            disabledDocumento: false,
            disabledApellido: false,
            disabledNombre: false,
          });
        }
        break;
      case "ApellidoBuscar":
        this.setState({apellido: event.target.value})
        this.setState({ valor: [event.target.value, this.state.valor[1]] }, this.disableApellidoNombre);
        break;
      case "NombreBuscar":
        this.setState({nombre: event.target.value})
        this.setState({ valor: [this.state.valor[0], event.target.value] }, this.disableApellidoNombre);
        break;
      default:
        console.log("error");
    }
  }

  disableApellidoNombre() {
    if (this.state.valor[0] !== '' || this.state.valor[1] !== '') {
      this.setState({
        disabledDocumento: true,
        disabledLegajo: true,
      });
    } else {
      this.setState({
        disabledDocumento: false,
        disabledLegajo: false,
      });
    }

  }

  render() {
    return (
      <div >
            <nav className="level">
              <div className="level-left">
                <h1> Buscar Afiliado </h1>
              </div>
              <div className="level-right">
                <div className="button link" onClick={this.limpiarBusqueda.bind(this)}> Limpiar Busqueda </div>
              </div>
            </nav>
        <div className="columns">
          <Campo type="number" label={'Documento'} id={'DocumentoBuscar'} value={this.state.documento} estado={this.state.disabledDocumento} placeholder="Buscar solo por Numero de Documento" handleChange={this.handleChange.bind(this)} />
          <Campo type="number" label={'Legajo'} id={'LegajoBuscar'} value={this.state.legajo} estado={this.state.disabledLegajo} placeholder="Buscar solo por Legajo" handleChange={this.handleChange.bind(this)} />
        </div>
        <div className="columns">
          <Campo type="text" label={'Apellido'} id={'ApellidoBuscar'} value={this.state.apellido} placeholder="Buscar por Apellido y Nombre" estado={this.state.disabledApellido} handleChange={this.handleChange.bind(this)} />
          <Campo type="text" label={'Nombre'} id={'NombreBuscar'} value={this.state.nombre} placeholder="Buscar por Apellido y Nombre" estado={this.state.disabledNombre} handleChange={this.handleChange.bind(this)} />

        </div>
      </div>
    );
  }
}

export default Buscar;
