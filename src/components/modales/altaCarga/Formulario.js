import React, { Component } from 'react';
import Campo from '../Campo';

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      apellido: <Campo type="text" label={'Apellido'} placeholder="" is='is-one-fifth' />,
      nombre: <Campo type="text" label={'Nombre'} placeholder="" is='is-one-fifth'/>,
      sexo: <Campo type="text" label={'Sexo'} placeholder="" />,
      cuil: <Campo type="text" label={'CUIL'} placeholder="" is='is-one-fifth'/>,
      tipoDocumento: <Campo type="text" label={'Tipo de Doc.'} placeholder="" />,
      numeroDocumento: <Campo type="text" label={'Nº de Documento'} placeholder="" is='is-one-fifth'/>,
      grupoSanguineo: <Campo type="text" label={'Grupo Sanguineo'} placeholder="" />,
      fechaEstado: <Campo type="date" label={'Fecha de cambio de estado'} placeholder="" />,
      fechaTarjeta: <Campo type="date" label={'Fecha de Entrega de Tarjeta'} placeholder="" />,
      fechaNacimiento: <Campo type="date" label={'Fecha de Nacimiento'} placeholder="" />,
      idReparticion: <Campo type="text" label={'Reparticion'} placeholder="" />,
      subcontrato: <Campo type="text" label={'Subcontrato'} placeholder="" />,
      idUnidadServicio: <Campo type="text" label={'Unidad y Servicio'} placeholder="" />,
      legajo: <Campo type="text" label={'Legajo'} placeholder="" />,
      lugarPago: <Campo type="text" label={'Lugar de Pago'} placeholder="" />,
      idLocalidad: <Campo type="text" label={'Localidad'} placeholder="" is='is-one-fifth'/>,
      domicilio: <Campo type="text" label={'Domicilio'} placeholder="" is='is-one-quarter' />,
      email: <Campo type="text" label={'Email'} placeholder="" is='is-one-fifth'/>,
      telefono: <Campo type="text" label={'Telefono'} placeholder="" />,
      idDelegacion: <Campo type="text" label={'Delegacion'} placeholder="" />,
      numeroCarga: <Campo type="text" label={'Numero de Carga'} placeholder="" />
    }
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
