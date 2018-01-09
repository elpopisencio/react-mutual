import React, { Component } from 'react';
import Campo from '../Campo';
import Select from '../Select';

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      apellido: ['', <Campo type="text" label={'Apellido'} placeholder="" is='is-one-fifth' handleChange={this.handleChange.bind(this)} />],
      nombre: ['', <Campo type="text" label={'Nombre'} placeholder="" is='is-one-fifth' handleChange={this.handleChange.bind(this)} />],
      cuil: ['', <Campo type="text" label={'CUIL'} placeholder="" is='is-one-fifth' handleChange={this.handleChange.bind(this)} />],
      numeroDocumento: ['', <Campo type="text" label={'Nº de Documento'} placeholder="" is='is-one-fifth' handleChange={this.handleChange.bind(this)} />],
      fechaEstado: ['', <Campo type="date" label={'Fecha de cambio de estado'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      fechaTarjeta: ['', <Campo type="date" label={'Fecha de Entrega de Tarjeta'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      fechaNacimiento: ['', <Campo type="date" label={'Fecha de Nacimiento'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      subcontrato: ['', <Campo type="text" label={'Subcontrato'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      legajo: ['', <Campo type="text" label={'Legajo'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      domicilio: ['', <Campo type="text" label={'Domicilio'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      email: ['', <Campo type="email" label={'Email'} placeholder="" is='is-one-fourth' handleChange={this.handleChange.bind(this)} />],
      telefono: ['', <Campo type="text" label={'Telefono'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      numeroCarga: ['', <Campo type="text" label={'Numero de Carga'} placeholder="" handleChange={this.handleChange.bind(this)} />],
      sexo: ['', <Select label={'Sexo'} value={[{ 'id': 'M', 'nombre': 'Masculino' }, { 'id': 'F', 'nombre': 'Femenino' }]} handleChange={this.handleChange.bind(this)} />],
      tipoDocumento: ['', <Select label={'Tipo de Doc.'} id={'tiposDocumento'} handleChange={this.handleChange.bind(this)} />],
      grupoSanguineo: ['', <Select label={'Grupo Sanguineo'} id={'gruposSanguineos'} handleChange={this.handleChange.bind(this)} />],
      idReparticion: ['', <Select label={'Reparticion'} id={'reparticiones'} handleChange={this.handleChange.bind(this)} />],
      idDelegacion: ['', <Select label={'Delegacion'} id={'delegaciones'} handleChange={this.handleChange.bind(this)} />],
      idServicio: ['', <Select label={'Servicio'} id={'servicios'} handleChange={this.handleChange.bind(this)} />],
      idLocalidad: ['', <Select label={'Localidad'} id={'localidades'} handleChange={this.handleChange.bind(this)} />],
      lugarPago: ['', <Select label={'Lugar de Pago'} id={'lugaresDePago'} handleChange={this.handleChange.bind(this)} />],
      unidadOrganizacional: ['', <Select label={'Uni. Orga.'} value={[{ 'id': '11', 'nombre': '11' }, { 'id': '12', 'nombre': '12' }, { 'id': '25', 'nombre': '25' }, { 'id': '26', 'nombre': '26' }]} handleChange={this.handleChange.bind(this)} />],
    }
    this.checkFields = this.checkFields.bind(this);
  }
  checkFields() {
    if (
      this.state.apellido[0] !== '' &&
      this.state.nombre[0] !== '' &&
      this.state.cuil[0] !== '' //&&
      /*
      this.state.numeroDocumento[0] !== '' &&
      this.state.fechaEstado[0] !== '' &&
      this.state.fechaTarjeta[0] !== '' &&
      this.state.fechaNacimiento[0] !== '' &&
      this.state.subcontrato[0] !== '' &&
      this.state.legajo[0] !== '' &&
      this.state.domicilio[0] !== '' &&
      this.state.email[0] !== '' &&
      this.state.telefono[0] !== '' &&
      this.state.numeroCarga[0] !== ''
    */
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
        this.setState({ apellido: [value, this.state.apellido[1]] }, this.checkFields());
        break;
      case 'Nombre':
        this.setState({ nombre: [value, this.state.nombre[1]] }, this.checkFields());
        break;
      case 'CUIL':
        this.setState({ cuil: [value, this.state.cuil[1]] }, this.checkFields());
        break;
      default:
        break;

    }
    if (label === 'Servicio') {
      if (value !== '1') {
        this.setState({
          unidadOrganizacional: ['', <Campo label={'Uni. Orga.'} size={'2'} maxlenght={'2'} handleChange={this.handleChange.bind(this)} />],
        });
      } else {
        this.setState({
          unidadOrganizacional: ['', <Select label={'Uni. Orga.'} value={[{ 'id': '11', 'nombre': '11' }, { 'id': '12', 'nombre': '12' }, { 'id': '25', 'nombre': '25' }, { 'id': '26', 'nombre': '26' }]} handleChange={this.handleChange.bind(this)} />],
        });
      }
    }
  }
  render() {
    return (
      <div >
        <div className='columns'>
          {this.state.apellido[1]}
          {this.state.nombre[1]}
          {this.state.sexo[1]}
          {this.state.idLocalidad[1]}
          {this.state.domicilio[1]}
        </div>
        <div className='columns'>
          {this.state.tipoDocumento[1]}
          {this.state.numeroDocumento[1]}
          {this.state.cuil[1]}
          {this.state.grupoSanguineo[1]}
          {this.state.email[1]}
        </div>
        <div className='columns'>
          {this.state.telefono[1]}
          {this.state.fechaEstado[1]}
          {this.state.fechaTarjeta[1]}
          {this.state.fechaNacimiento[1]}
        </div>
        <div className='columns'>
          {this.state.idReparticion[1]}
          {this.state.subcontrato[1]}
          <div className='columns'>
            {this.state.idServicio[1]}
            {this.state.unidadOrganizacional[1]}
          </div>
          {this.state.legajo[1]}
        </div>
        <div className='columns'>
          {this.state.lugarPago[1]}
          {this.state.idDelegacion[1]}
        </div>
      </div>
    );
  }
}

export default Buscar;
