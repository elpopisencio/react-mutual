import React, { Component } from 'react';
import Campo from '../Campo';
import Select from '../Select';

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      apellido:             ['', <Campo  label={'Apellido'}                    handleChange={this.handleChange.bind(this)}  type="text"    is='is-one-fifth'/>],
      nombre:               ['', <Campo  label={'Nombre'}                      handleChange={this.handleChange.bind(this)}  type="text"    is='is-one-fifth'/>],
      cuil:                 ['', <Campo  label={'CUIL'}                        handleChange={this.handleChange.bind(this)}  type="text"    is='is-one-fifth'/>],
      numeroDocumento:      ['', <Campo  label={'Nº de Documento'}             handleChange={this.handleChange.bind(this)}  type="text"    is='is-two-thirds'/>],
      email:                ['', <Campo  label={'Email'}                       handleChange={this.handleChange.bind(this)}  type="email"   is='is-one-fourth'/>],
      fechaEstado:          ['', <Campo  label={'Fecha de Afiliacion'}         handleChange={this.handleChange.bind(this)}  type="date"    />],
      fechaTarjeta:         ['', <Campo  label={'Fecha de Entrega de Tarjeta'} handleChange={this.handleChange.bind(this)}  type="date"    />],
      fechaNacimiento:      ['', <Campo  label={'Fecha de Nacimiento'}         handleChange={this.handleChange.bind(this)}  type="date"    />],
      subcontrato:          ['', <Campo  label={'Subcontrato'}                 handleChange={this.handleChange.bind(this)}  type="text"    />],
      legajo:               ['', <Campo  label={'Legajo'}                      handleChange={this.handleChange.bind(this)}  type="text"    />],
      domicilio:            ['', <Campo  label={'Domicilio'}                   handleChange={this.handleChange.bind(this)}  type="text"    />],
      telefono:             ['', <Campo  label={'Telefono'}                    handleChange={this.handleChange.bind(this)}  type="text"    />],
      numeroCarga:          ['', <Campo  label={'Numero de Carga'}             handleChange={this.handleChange.bind(this)}  type="text"    />],
      sexo:                 ['', <Select label={'Sexo'}                        handleChange={this.handleChange.bind(this)} value={[{ 'id': 'M', 'nombre': 'Masculino' }, { 'id': 'F', 'nombre': 'Femenino' }]} />],
      tipoDocumento:        ['', <Select label={'Tipo Doc.'}                   handleChange={this.handleChange.bind(this)} id={'tiposDocumento'}/>],
      grupoSanguineo:       ['', <Select label={'Grupo Sanguineo'}             handleChange={this.handleChange.bind(this)} id={'gruposSanguineos'}/>],
      idReparticion:        ['', <Select label={'Reparticion'}                 handleChange={this.handleChange.bind(this)} id={'reparticiones'}/>],
      idDelegacion:         ['', <Select label={'Delegacion'}                  handleChange={this.handleChange.bind(this)} id={'delegaciones'}/>],
      idServicio:           ['', <Select label={'Servicio'}                    handleChange={this.handleChange.bind(this)} id={'servicios'}/>],
      idLocalidad:          ['', <Select label={'Localidad'}                   handleChange={this.handleChange.bind(this)} id={'localidades'}/>],
      lugarPago:            ['', <Select label={'Lugar de Pago'}               handleChange={this.handleChange.bind(this)} id={'lugaresDePago'}/>],
      unidadOrganizacional: ['', <Select label={'Uni. Orga.'}                  handleChange={this.handleChange.bind(this)} value={[{ 'id': '11', 'nombre': '11' }, { 'id': '12', 'nombre': '12' }, { 'id': '25', 'nombre': '25' }, { 'id': '26', 'nombre': '26' }]} />],
    }
  }

  handleChange(value, label) {
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
    this.props.handleChange(value,label);
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
        <div className='columns'>
          {this.state.tipoDocumento[1]}
          {this.state.numeroDocumento[1]}
        </div>  
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
          {this.state.legajo[1]}
          {this.state.subcontrato[1]}
          <div className='columns'>
            {this.state.idServicio[1]}
            {this.state.unidadOrganizacional[1]}
          </div>
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
