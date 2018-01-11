import React, { Component } from 'react';
import Campo from './Campo';

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      apellido:            '', 
      nombre:              '', 
      cuil:                '', 
      numeroDocumento:     '', 
      email:               '', 
      fechaEstado:         '', 
      fechaTarjeta:        '', 
      fechaNacimiento:     '', 
      subcontrato:         '', 
      legajo:              '', 
      domicilio:           '', 
      telefono:            '', 
      numeroCarga:         '', 
      sexo:                '', 
      tipoDocumento:       '', 
      grupoSanguineo:      '', 
      idReparticion:       '', 
      idDelegacion:        '', 
      idServicio:          '', 
      idLocalidad:         '', 
      lugarPago:           '', 
      unidadOrganizacional:'', 
    }
  }
/*
{"id":158,
"id_tipo_documento":1,
"numero_documento":556008,
"apellido":"LEIVA",
"nombre":"ELVIA ROSA",
"numero_carga":0,
"sexo":"F",
"id_reparticion_propia":null,
"legajo_propio":null,
"fecha_nacimiento":"1930-12-12",
"id_parentesco":40,
"numero_documento_titular":556008,
"id_tipo_documento_titular":1,
"grupo_sanguineo":null,
"id_motivo_baja":null,
"id_estado":4,
"fecha_estado":"2015-09-04",
"fecha_tarjeta":null,
"observaciones":null,
"id_reparticion":9,
"legajo":4946,
"id_unidad_servicio":null,
"lugar_pago":null,
"subcontrato":"0",
"cuil":"27005560085",
"cbu":"",
"id_localidad":0,
"domicilio":"DANTE ALLIGHIRI 752 - DON BOSCO",
"email":"",
"telefono":"4777487",
"id_delegacion":null,
"ssm":1,
"id_canal_de_pago":2,
"id_servicios":null,
"unidad_organizacional":null}
*/
  componentWillMount = () => {
      fetch(`http://192.168.0.244/mostrarDatos?numero_documento=${this.props.numeroDocumento}`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            
      apellido:             <Campo  value={response.apellido}             label={'Apellido'}                    type="text"    is='is-one-fifth'  />, 
      nombre:               <Campo  value={response.nombre}               label={'Nombre'}                      type="text"    is='is-one-fifth'  />, 
      cuil:                 <Campo  value={response.cuil}                 label={'CUIL'}                        type="text"    is='is-one-fifth'  />, 
      numeroDocumento:      <Campo  value={response.numero_documento}     label={'Nº de Documento'}             type="text"    is='is-two-thirds' />, 
      email:                <Campo  value={response.email}                label={'Email'}                       type="email"   is='is-one-fourth' />, 
      fechaEstado:          <Campo  value={response.fecha_estado}         label={'Fecha de Afiliacion'}         type="date"                       />, 
      fechaTarjeta:         <Campo  value={response.fecha_tarjeta}        label={'Fecha de Entrega de Tarjeta'} type="date"                       />, 
      fechaNacimiento:      <Campo  value={response.fecha_nacimiento}     label={'Fecha de Nacimiento'}         type="date"                       />, 
      subcontrato:          <Campo  value={response.subcontrato}          label={'Subcontrato'}                 type="text"                       />, 
      legajo:               <Campo  value={response.legajo}               label={'Legajo'}                      type="text"                       />, 
      domicilio:            <Campo  value={response.domicilio}            label={'Domicilio'}                   type="text"                       />, 
      telefono:             <Campo  value={response.telefono}             label={'Telefono'}                    type="text"                       />, 
      numeroCarga:          <Campo  value={response.numero_carga}         label={'Numero de Carga'}             type="text"                       />, 
      sexo:                 <Campo  value={response.sexo}                 label={'Sexo'}                        type="text" id="sexo"                      />, 
      tipoDocumento:        <Campo  value={response.id_tipo_documento}    label={'Tipo Doc.'}                   type="text" id="tiposDocumento"                      />, 
      grupoSanguineo:       <Campo  value={response.grupo_sanguineo}      label={'Grupo Sanguineo'}             type="text" id="gruposSanguineos"                      />, 
      idReparticion:        <Campo  value={response.id_reparticion}       label={'Reparticion'}                 type="text" id="reparticiones"                      />, 
      idDelegacion:         <Campo  value={response.id_delegacion}        label={'Delegacion'}                  type="text" id="delegaciones"                      />, 
      idServicio:           <Campo  value={response.id_servicio}          label={'Servicio'}                    type="text" id="servicios"                      />, 
      idLocalidad:          <Campo  value={response.id_localidad}         label={'Localidad'}                   type="text" id="localidades"                      />, 
      lugarPago:            <Campo  value={response.id_lugar_pago}        label={'Lugar de Pago'}               type="text" id="lugarDePago"                      />, 
      unidadOrganizacional: <Campo  value={response.unidadOrganizacional} label={'Uni. Orga.'}                  type="text"                       />, 

          });
        })
        .catch(function (error) {
          console.log('Request failed', error)
        });
  }

  render() {
    return (
      <div >
        <div className='columns'>
          {this.state.apellido}
          {this.state.nombre}
          {this.state.sexo}
          {this.state.idLocalidad}
          {this.state.domicilio}
        </div>
        <div className='columns'>
        <div className='columns'>
          {this.state.tipoDocumento}
          {this.state.numeroDocumento}
        </div>  
          {this.state.cuil}
          {this.state.grupoSanguineo}
          {this.state.email}
        </div>
        <div className='columns'>
          {this.state.telefono}
          {this.state.fechaEstado}
          {this.state.fechaTarjeta}
          {this.state.fechaNacimiento}
        </div>
        <div className='columns'>
          {this.state.idReparticion}
          {this.state.legajo}
          {this.state.subcontrato}
          <div className='columns'>
            {this.state.idServicio}
            {this.state.unidadOrganizacional}
          </div>
        </div>
        <div className='columns'>
          {this.state.lugarPago}
          {this.state.idDelegacion}
        </div>
      </div>
    );
  }
}

export default Buscar;
