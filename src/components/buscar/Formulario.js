import React, { Component } from 'react';
import Campo from './Campo';
import Tabla from './Tabla';

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
      valor: ['', ''],
      respuesta: []
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
      valor: ['', ''],
      respuesta: []
    })
  }

  handleChange(event) {
    let consulta = '';
    switch (event.target.id) {
      case "DocumentoBuscar":
        this.setState({documento: event.target.value})
        if (event.target.value !== '') {
        consulta = 'numero_documento=' + event.target.value;
        this.hendleRequest(consulta);
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
      respuesta: []
          });
        }
        break;
      case "LegajoBuscar":
        this.setState({legajo: event.target.value})
        if (event.target.value !== '') {
        consulta = 'legajo=' + event.target.value;
        this.hendleRequest(consulta);
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
      respuesta: []
          });
        }
        break;
      case "ApellidoBuscar":
        this.setState({apellido: event.target.value}, 
          () => {
            this.disableApellidoNombre();
          });
        break;
      case "NombreBuscar":
        this.setState({nombre: event.target.value},
          () => {
            this.disableApellidoNombre();
          });
        break;
      default:
        console.log("error");
    }
  }

  hendleRequest = (consulta) => {
      fetch(`http://192.168.0.244/busqueda?${consulta}`)
        .then(response => response.json())
        .then(response => {
          let res = response.slice(0, 50);
          this.setState({
            respuesta: res
          });
        })
        .catch(function (error) {
          console.log('Request failed', error)
        });
  }

  disableApellidoNombre = () => {
    if (this.state.apellido !== '' || this.state.nombre !== '') {
        let consulta = 'apellido=' + this.state.apellido + '&nombre=' + this.state.nombre;
        this.hendleRequest(consulta);
      this.setState({
        disabledDocumento: true,
        disabledLegajo: true,
      });
    } else {
      this.setState({
        disabledDocumento: false,
        disabledLegajo: false,
      respuesta: []
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
              </div>
            </nav>
        <div className="columns">
          <Campo type="number" label={'Documento'} id={'DocumentoBuscar'} value={this.state.documento} estado={this.state.disabledDocumento} placeholder="Buscar solo por Numero de Documento" handleChange={this.handleChange.bind(this)} />
          <Campo type="number" label={'Legajo'} id={'LegajoBuscar'} value={this.state.legajo} estado={this.state.disabledLegajo} placeholder="Buscar solo por Legajo" handleChange={this.handleChange.bind(this)} />
          <Campo type="text" label={'Apellido'} id={'ApellidoBuscar'} value={this.state.apellido} placeholder="Buscar por Apellido y Nombre" estado={this.state.disabledApellido} handleChange={this.handleChange.bind(this)} />
          <Campo type="text" label={'Nombre'} id={'NombreBuscar'} value={this.state.nombre} placeholder="Buscar por Apellido y Nombre" estado={this.state.disabledNombre} handleChange={this.handleChange.bind(this)} />
          <div className='column'>
          <br />
                <div className="button link" onClick={this.limpiarBusqueda.bind(this)}> Limpiar Busqueda </div>

        </div>
        </div>
        <Tabla values={this.state.respuesta} />
      </div>
    );
  }
}

export default Buscar;
