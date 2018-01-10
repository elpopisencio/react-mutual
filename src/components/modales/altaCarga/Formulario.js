import React, { Component } from 'react';
import Campo from '../Campo';
import Select from '../Select';

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      numeroDocumentoTitular: ['', <Campo type="text" label={'Nº de Documento Titular'} placeholder="" is='is-one-fifth' handleChange={this.handleChange.bind(this)} />],
      apellido: ['', <Campo type="text" label={'Apellido'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      nombre: ['', <Campo type="text" label={'Nombre'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      numeroDocumento: ['', <Campo type="text" label={'Nº de Documento'} placeholder="" is='is-two-fifths' handleChange={this.handleChange.bind(this)} />],
      fechaEstado: ['', <Campo type="date" label={'Fecha de Afiliacion'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      fechaTarjeta: ['', <Campo type="date" label={'Fecha de Entrega de Tarjeta'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      fechaNacimiento: ['', <Campo type="date" label={'Fecha de Nacimiento'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      legajo: ['', <Campo type="text" label={'Legajo'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      numeroCarga: ['', <Campo type="text" label={'Numero de Carga'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      sexo: ['', <Select label={'Sexo'} value={[{ 'id': 'M', 'nombre': 'Masculino' }, { 'id': 'F', 'nombre': 'Femenino' }]} handleChange={this.handleChange.bind(this)} />],
      tipoDocumento: ['', <Select label={'Tipo Doc.'} id={'tiposDocumento'} handleChange={this.handleChange.bind(this)} />],
      grupoSanguineo: ['', <Select label={'Gr. Sang.'} id={'gruposSanguineos'} handleChange={this.handleChange.bind(this)} />],
    }
    this.checkFields = this.checkFields.bind(this);
  }
  checkFields = () => {
    console.log(

      this.state.apellido[0],
      this.state.nombre[0],
      this.state.numeroDocumento[0],
      this.state.fechaEstado[0],
      this.state.fechaNacimiento[0],
      this.state.legajo[0],
    );
    if (
      this.state.apellido[0] !== '' &&
      this.state.nombre[0] !== '' &&
      this.state.numeroDocumento[0] !== '' &&
      this.state.fechaEstado[0] !== '' &&
      this.state.fechaNacimiento[0] !== '' &&
      this.state.legajo[0] !== '' 
    
    ){
        console.log('entro');
        this.props.checkFields(true);
      } else{
        this.props.checkFields(false);
      }
  }

  handleChange(value, label) {
    console.log(value, label);
    switch (label) {
      case 'Apellido':
        this.setState({ apellido: [value, this.state.apellido[1]] }, () => this.checkFields());
        break;
      case 'Nombre':
        this.setState({ nombre: [value, this.state.nombre[1]] }, () => this.checkFields());
        break;
      case 'Nº de Documento':
        this.setState({ numeroDocumento: [value, this.state.numeroDocumento[1]] }, () => this.checkFields());
        break;
      case 'Fecha de Afiliacion':
        this.setState({ fechaEstado: [value, this.state.fechaEstado[1]] }, () => this.checkFields());
        break
      case 'Fecha de Nacimiento':
        this.setState({ fechaNacimiento: [value, this.state.fechaNacimiento[1]] }, () => this.checkFields());
        break;
      case 'Legajo':
        this.setState({ legajo: [value, this.state.legajo[1]] }, () => this.checkFields());
        break;
      default:
        break;

    }
  }
  render() {
    return (
      <div >

        <div className='columns'>
          {this.state.numeroDocumentoTitular}
        </div>
        <div className='columns'>
          {this.state.apellido[1]}
          {this.state.nombre[1]}
          <div className='column is-three-fifths'>
        <div className='columns'>
          {this.state.sexo[1]}
          {this.state.tipoDocumento[1]}
          {this.state.numeroDocumento[1]}
          {this.state.grupoSanguineo[1]}
        </div>  
        </div>  
        </div>
        <div className='columns'>
          {this.state.fechaEstado[1]}
          {this.state.fechaTarjeta[1]}
          {this.state.fechaNacimiento[1]}
          {this.state.legajo[1]}
          {this.state.numeroCarga[1]}
        </div>
      </div>
    );
  }
}

export default Buscar;
