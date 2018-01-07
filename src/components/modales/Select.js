import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
  }
  componentWillMount(){
    if (this.props.id !== undefined){
  fetch(`http://192.168.0.244/${this.props.id}`)
  .then(response => response.json())
  .then(response => {
    this.setState({
      value: response
    });
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
} else {
  this.setState({
    value: this.props.value
});
}
}
  handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()})
  }
  render() {
    let values = this.state.value;
    let options = values.map(option => {
      return <option key={option.id}>{option.tipo}</option>;
    });
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
            <div className="select is-info">
              <select>
                {options}
              </select>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Select;
