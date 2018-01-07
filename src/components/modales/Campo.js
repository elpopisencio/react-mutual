import React, { Component } from 'react';

class Campo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', bandera: false };

  }
  handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
        if(event.target.value === ''){
          this.setState({bandera: false}, this.props.handleChange(-1));
        } else {
          if(!this.state.bandera){
            console.log('e');
          this.setState({bandera: true}, this.props.handleChange(1));
          }
        }
  }
  render() {
    if (this.props.estado) {
      return (
        <div className={`column ${this.props.is}`}>
          <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
              <input className="input is-info" disabled></input>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`column ${this.props.is}`}>
          <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
              <input className="input is-info" id={this.props.id} type={this.props.type} value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)}></input>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Campo;
