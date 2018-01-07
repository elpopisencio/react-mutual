import React, { Component } from 'react';
import Campo from '../Campo';
import Select from '../Select';

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      apellido: <Campo type="text" label={'Apellido'} placeholder="" is='is-one-fifth' handleChange={this.handleChange.bind(this)}/>,
      nombre: <Campo type="text" label={'Nombre'} placeholder="" is='is-one-fifth'handleChange={this.handleChange.bind(this)}/>,
      sexo: <Select label={'sexo'} value={[{'id':'1','tipo':'Masculino'},{'id':'2','tipo':'Femenino'}]} handleChange={this.handleChange.bind(this)}/>,
      cuil: <Campo type="text" label={'CUIL'} placeholder="" is='is-one-fifth'handleChange={this.handleChange.bind(this)}/>,
      tipoDocumento: <Select label={'Tipo de Doc.'} id={'tiposdni'} handleChange={this.handleChange.bind(this)}/>,
      numeroDocumento: <Campo type="text" label={'Nº de Documento'} placeholder="" is='is-one-fifth'handleChange={this.handleChange.bind(this)}/>,
      grupoSanguineo: <Campo type="text" label={'Grupo Sanguineo'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      fechaEstado: <Campo type="date" label={'Fecha de cambio de estado'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      fechaTarjeta: <Campo type="date" label={'Fecha de Entrega de Tarjeta'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      fechaNacimiento: <Campo type="date" label={'Fecha de Nacimiento'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      idReparticion: <Campo type="text" label={'Reparticion'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      subcontrato: <Campo type="text" label={'Subcontrato'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      idUnidadServicio: <Campo type="text" label={'Unidad y Servicio'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      legajo: <Campo type="text" label={'Legajo'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      lugarPago: <Campo type="text" label={'Lugar de Pago'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      idLocalidad: <Campo type="text" label={'Localidad'} placeholder="" is='is-one-fifth'handleChange={this.handleChange.bind(this)}/>,
      domicilio: <Campo type="text" label={'Domicilio'} placeholder="" is='is-one-quarter' handleChange={this.handleChange.bind(this)}/>,
      email: <Campo type="text" label={'Email'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      telefono: <Campo type="text" label={'Telefono'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      idDelegacion: <Campo type="text" label={'Delegacion'} placeholder="" handleChange={this.handleChange.bind(this)}/>,
      numeroCarga: <Campo type="text" label={'Numero de Carga'} placeholder=""handleChange={this.handleChange.bind(this)} />
    }
  }
  handleChange(number){
    let num = this.state.number;
    num += number;
    console.log(num);
    this.setState({number: num}, () => console.log(this.state.number));
  }
  render() {
    return (
      <div >
          <div className='columns'>
        {this.state.apellido }
      {this.state.nombre}
      {this.state.sexo}
      {this.state.idLocalidad}
      {this.state.domicilio}
      </div>
          <div className='columns'>
      {this.state.tipoDocumento}
      {this.state.numeroDocumento}
      {this.state.cuil}
      {this.state.grupoSanguineo}
      {this.state.email}
      {this.state.telefono}
      </div>
          <div className='columns'>
      {this.state.fechaEstado}
      {this.state.fechaTarjeta}
      {this.state.fechaNacimiento}
      </div>
          <div className='columns'>
      {this.state.idReparticion}
      {this.state.subcontrato}
      {this.state.idUnidadServicio}
      {this.state.legajo}
      {this.state.lugarPago}
      {this.state.idDelegacion}
      </div>
      </div>
    );
  }
}

export default Buscar;
