import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Formulario from './Formulario';
import Footer from '../Footer';
import './AltaTitular.css';

class MostrarTitular extends React.Component {
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

    this.setState({
      modal:
        <ReactModal
          isOpen={true}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
        >
          <Formulario numeroDocumento="8430037"/>
          <Footer>
            <div className='level'>
              <div className='level-left'>
              </div>
              <div className='level-right'>
                <div className="field is-grouped">
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

  handleCloseModal() {
    this.setState({
      modal: <div />
    });
  }
  render() {
    return (
      <div>
        <a className="button" onClick={this.handleOpenModal}>
          <span>
            Mostrar Titular
          </span>
        </a>
        {this.state.modal}
      </div>
    );
  }
}

const props = {};

export default MostrarTitular;
