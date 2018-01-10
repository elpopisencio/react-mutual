import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { options: [], value: '' };
  }
  componentWillMount() {
    if (this.props.id !== undefined) {
      fetch(`http://192.168.0.244/${this.props.id}`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            options: response,
            value: response[0].id
          }, () => this.handleReparticion());
        })
        .catch(function (error) {
          console.log('Request failed', error)
        });
    } else {
      this.setState({
        options: this.props.value
      });
    }
  }

  handleReparticion = () => {
    if(this.props.id === 'reparticiones'){
    console.log(this.state.options);
      let opt = this.state.options.map((item) => {
        let ret = {nombre: item.codigo_reparticion + ' - ' + item.nombre};
        return ret;
      });
      this.setState({options: opt},
    console.log(this.state.options)
      )
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value}); 
    this.props.handleChange( event.target.value, this.props.label);
  }
  render() {
    let values = this.state.options;
    let options = values.map(option => {
      if (option.nombre) {
        return <option key={option.id} value={option.id} >{option.nombre.toUpperCase()}</option>;
      } else {
        return <option key={option.id}>{option.nombre}</option>;
      }
    });

    if (this.props.estado) {
      return (
        <div className={`column`}>
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
        <div className={`column`}>
          <div className="field">
            <label className="label">{this.props.label}*</label>
            <div className="select is-info">
              <select onChange={this.handleChange.bind(this)}>
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
