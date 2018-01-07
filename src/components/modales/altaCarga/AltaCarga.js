import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Formulario from './Formulario';
import Footer from '../Footer';

class AltaCarga extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      boton: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleAlta() {
    console.log("hola");
    this.setState({
      boton: 'is-loading'
    });
  }

  render() {
    return (
      <div>
        <a className="button" onClick={this.handleOpenModal}>
          <span>
            Alta Carga
                    </span>
        </a>
        <ReactModal
          isOpen={this.state.showModal}
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
                    <a className={`button is-link ${this.state.boton}`} onClick={this.handleAlta.bind(this)}>
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
      </div>
    );
  }
}

const props = {};

export default AltaCarga;
