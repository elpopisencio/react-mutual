import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Formulario from './Formulario';
import Footer from '../Footer';

class AltaTitular extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      boton: '',
      modal: <div />
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

handleOpenModal(){
  this.displayModal('');
}

  displayModal(boton) {
    this.setState({ 
        modal:<ReactModal
          isOpen={true}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
        >
          <Formulario />
          <Footer>
            <div className='level'>
              <div className='level-left'>
      </div>
              <div className='level-right'>
                <div className="field is-grouped">
                  <p className="control">
                    <a className={`button is-link ${boton}`} onClick={this.handleAlta.bind(this)}>
                      Dar Alta
    </a>
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

  handleCloseModal() {
    this.setState({ 
      modal: <div />
    });
  }

  handleAlta() {
    this.displayModal('is-loading');
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
