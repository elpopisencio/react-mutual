import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Formulario from './Formulario';
import Footer from '../Footer';
import './AltaTitular.css';

class AltaTitular extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      boton: '',
      modal: <div />,
      formulario: false,

      apellido:             '', 
      nombre:               '', 
      cuil:                 '', 
      numeroDocumento:      '', 
      email:                '', 
      fechaEstado:          '', 
      fechaTarjeta:         '', 
      fechaNacimiento:      '', 
      subcontrato:          '', 
      legajo:               '', 
      domicilio:            '', 
      telefono:             '', 
      numeroCarga:          '', 
      sexo:                 '', 
      tipoDocumento:        '', 
      grupoSanguineo:       '', 
      idReparticion:        '', 
      idDelegacion:         '', 
      idServicio:           '', 
      idLocalidad:          '', 
      lugarPago:            '', 
      unidadOrganizacional: ''

      
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleChange = (value, label) => {
    switch (label) {
      case 'Apellido':
        this.setState({ apellido: value }, this.checkFields());
        break;
      case 'Nombre':
        this.setState({ nombre: value }, () => this.checkFields());
        break;
      case 'CUIL':
        this.setState({ cuil: value }, () => this.checkFields());
        break;
      case 'Nº de Documento':
        this.setState({ numeroDocumento: value }, () => this.checkFields());
        break;
      case 'Fecha de Afiliacion':
        this.setState({ fechaEstado: value }, () => this.checkFields());
        break
      case 'Fecha de Nacimiento':
        this.setState({ fechaNacimiento: value }, () => this.checkFields());
        break;
      case 'Subcontrato':
        this.setState({ subcontrato: value }, () => this.checkFields());
        break;
      case 'Legajo':
        this.setState({ legajo: value }, () => this.checkFields());
        break;
      case 'Domicilio': 
        this.setState({ domicilio: value }, () => this.checkFields());
        break;
      case "Email":
        this.setState({ email: value }, () => this.checkFields());
        break;
      case 'Telefono':
        this.setState({ telefono: value }, () => this.checkFields());
        break;
      default:
        break;

    }
  }

  handleOpenModal() {
    this.displayModal('');
  }

  displayModal(boton) {
    let a = '';
    if (this.state.formulario) {
      a = <a className={`button is-link ${boton}`} onClick={this.handleAlta.bind(this)}>
        Dar Alta
      </a>;
    } else {
         a = <a className={`button is-link ${boton}`} disabled onClick={this.handleAlta.bind(this)}>
               Dar Alta
             </a>;
    }

    this.setState({
      modal:
        <ReactModal
          isOpen={true}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
        >
          <Formulario checkFields={this.checkFields.bind(this)} handleChange={this.handleChange} />
          <Footer>
            <div className='level'>
              <div className='level-left'>
              </div>
              <div className='level-right'>
                <div className="field is-grouped">
                  <p className="control">
                    {a}
                  </p>
                  <p className="control">
                    <a className="button" onClick={this.handleCloseModal}>
                      Cancelar
                  </a>
                  </p>
                </div>
              </div>
            </div>
          </Footer>
        </ReactModal>
    });
  }

  checkFields = () => {
    console.log(
      'pepe'
    );
    if (
      this.state.apellido !== '' &&
      this.state.nombre !== '' &&
      this.state.cuil !== '' &&
      this.state.numeroDocumento !== '' &&
      this.state.fechaEstado !== '' &&
      this.state.fechaNacimiento !== '' &&
      this.state.subcontrato !== '' &&
      this.state.legajo !== '' &&
      this.state.domicilio !== '' &&
      this.state.email !== '' &&
      this.state.telefono !== ''
    
    ){
        console.log('entro');
        this.setState({
          formulario: true
        }, () => this.displayModal(this.state.boton))
      } 
  }


  handleCloseModal() {
    this.setState({
      modal: <div />
    });
  }

  handleAlta() {
    if (this.state.formulario) {
      this.setState({boton: 'is-loading'}, this.displayModal('is-loading'));
      fetch(`http://192.168.0.244/altaTitular`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: {
          "apellido":      this.state.apellido,
          "nombre":      this.state.nombre,
          "cuil":      this.state.cuil,
          "numero_documento":      this.state.numeroDocumento,
          "email":      this.state.email,
          "fecha_estado":      this.state.fechaEstado,
          "fecha_tarjeta":      this.state.fechaTarjeta,
          "fecha_nacimiento":      this.state.fechaNacimiento,
          "subcontrato":      this.state.subcontrato,
          "legajo":      this.state.legajo,
          "domicilio":      this.state.domicilio,
          "telefono":      this.state.telefono,
          "numero_carga":      this.state.numeroCarga,
          "sexo":      this.state.sexo,
          "id_tipo_documento":      this.state.tipoDocumento,
          "id_grupo_sanguineo":      this.state.grupoSanguineo,
          "id_reparticion":      this.state.idReparticion,
          "id_delegacion":      this.state.idDelegacion,
          "id_servicio":      this.state.idServicio,
          "id_localidad":      this.state.idLocalidad,
          "lugar_pago":      this.state.lugarPago,
          "unidad_organizacional":      this.state.unidadOrganizacional,
        }
       }).then(console.log("alta"))
    }
  }

  render() {
    return (
      <div>
        <a className="button" onClick={this.handleOpenModal}>
          <span>
            Alta Titular
          </span>
        </a>
        {this.state.modal}
      </div>
    );
  }
}

const props = {};

export default AltaTitular;
