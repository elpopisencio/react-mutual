import React, { Component } from 'react';

class Campo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

  }
  render() {
    if (this.props.estado) {
      return (
        <div className="column">
          <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
              <input className="input is-info" label="algo" type={this.props.type} value={this.props.value} placeholder={this.props.placeholder} disabled></input>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="column">
          <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
              <input className="input is-info" id={this.props.id} type={this.props.type} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.handleChange}></input>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default Campo;
