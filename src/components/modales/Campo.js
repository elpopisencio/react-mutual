import React, { Component } from 'react';

class Campo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', bandera: false };

  }
  handleChange(event) {
    if(this.props.label === 'Email'){
        this.setState({value: event.target.value}, () => this.props.handleChange( this.state.value, this.props.label));
    }else{
        this.setState({value: event.target.value.toUpperCase()}, () => this.props.handleChange( this.state.value, this.props.label));
    }
  }
  render() {
    let ast = '';
    if(this.props.label !== 'Fecha de Entrega de Tarjeta'){
      ast = '*';
    }
    if (this.props.readonly === "readonly") {
      return (
        <div className={`column ${this.props.is}`}>
          <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
              <input className="input is-info" readonly></input>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`column ${this.props.is}`}>
          <div className="field">
            <label className="label">{this.props.label + ast}</label>
            <div className="control">
              <input className="input is-info" id={this.props.id} size={this.props.size} maxlenght={this.props.maxlenght} type={this.props.type} value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)}></input>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Campo;
