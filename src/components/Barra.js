import React, { Component } from 'react';
import AltaTitular from './modales/altaTitular/AltaTitular';
import AltaCarga from './modales/altaCarga/AltaCarga';

class Barra extends Component {
  render() {
    return (
      <div >
        <div className="navbar is-link" >
          <div className="navbar-brand">
            <div className="navbar-item">
              Sistema Mutual
            </div>
            <div className="navbar-item">
              <div className="field is-grouped">
                <div className="control">
                  <AltaTitular />
                </div>
              </div>
            </div>
            <div className="navbar-item">
              <div className="field is-grouped">
                <div className="control">
                  <AltaCarga />
                </div>
              </div>
            </div>
          </div>
        </ div>
      </div>
    );
  }
}

export default Barra;
