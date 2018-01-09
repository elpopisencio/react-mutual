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
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
          <Formulario checkFields={this.checkFields.bind(this)} />
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

  checkFields(bool){
    this.setState({formulario: bool}, this.displayModal(this.state.boton));
  }

  handleCloseModal() {
    this.setState({
      modal: <div />
    });
  }

  handleAlta() {
    if (this.state.formulario) {
      this.setState({boton: 'is-loading'}, this.displayModal('is-loading'));
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
